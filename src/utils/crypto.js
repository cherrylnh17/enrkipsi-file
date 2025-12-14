// ===============================
// CRYPTO UTILS (AES-256-GCM)
// ===============================

// Generate AES Key dari Password + Salt
export async function getKeyFromPassword(password, salt, mode) {
  const enc = new TextEncoder();

  // Password → key material
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  // Derive AES-GCM 256-bit key
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    [mode] // "encrypt" atau "decrypt"
  );
}


export async function encryptFile(file, password) {
  // 🔹 Generate salt & IV
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // 🔹 Generate key
  const key = await getKeyFromPassword(password, salt, "encrypt");

  // 🔹 File → ArrayBuffer
  const buffer = await file.arrayBuffer();

  // 🔹 Encrypt
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    buffer
  );

  // 🔹 Metadata file
  const meta = JSON.stringify({
    name: file.name,
    type: file.type,
  });

  const metaBuffer = new TextEncoder().encode(meta);

  // 🔹 Gabungkan semua data
  const result = new Uint8Array(
    salt.byteLength +
    iv.byteLength +
    4 +
    metaBuffer.byteLength +
    encrypted.byteLength
  );

  let offset = 0;

  result.set(salt, offset); offset += 16;
  result.set(iv, offset); offset += 12;
  result.set(new Uint8Array(new Uint32Array([metaBuffer.byteLength]).buffer), offset); offset += 4;
  result.set(metaBuffer, offset); offset += metaBuffer.byteLength;
  result.set(new Uint8Array(encrypted), offset);

  return new Blob([result], { type: "application/octet-stream" });
}


export async function decryptFile(file, password) {
  const data = new Uint8Array(await file.arrayBuffer());
  let offset = 0;

  // 🔹 Ambil SALT & IV
  const salt = data.slice(offset, offset + 16); offset += 16;
  const iv = data.slice(offset, offset + 12); offset += 12;

  // 🔹 Metadata
  const metaLength = new Uint32Array(
    data.slice(offset, offset + 4).buffer
  )[0];
  offset += 4;

  const meta = JSON.parse(
    new TextDecoder().decode(data.slice(offset, offset + metaLength))
  );
  offset += metaLength;

  // 🔹 Data terenkripsi
  const encryptedData = data.slice(offset);

  // 🔹 Generate key yang sama
  const key = await getKeyFromPassword(password, salt, "decrypt");

  // 🔹 Decrypt
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    encryptedData
  );

  return {
    blob: new Blob([decrypted], { type: meta.type }),
    filename: meta.name,
  };
}
