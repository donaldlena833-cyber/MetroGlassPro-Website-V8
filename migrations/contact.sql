CREATE TABLE IF NOT EXISTS contact_rate_limits (
  bucket TEXT PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  attempts INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS contact_rate_expiry ON contact_rate_limits(expires_at);

CREATE TABLE IF NOT EXISTS contact_used_tokens (
  token_hash TEXT PRIMARY KEY,
  attempt_id TEXT NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS contact_used_tokens_expiry ON contact_used_tokens(expires_at);

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id TEXT PRIMARY KEY,
  created_at INTEGER NOT NULL,
  fingerprint TEXT NOT NULL,
  details TEXT NOT NULL,
  notification_status TEXT NOT NULL DEFAULT 'pending'
);
CREATE INDEX IF NOT EXISTS contact_inquiry_duplicate ON contact_inquiries(fingerprint, created_at);
CREATE INDEX IF NOT EXISTS contact_inquiry_status ON contact_inquiries(notification_status, created_at);

CREATE TABLE IF NOT EXISTS contact_inquiry_attachment_chunks (
  inquiry_id TEXT NOT NULL REFERENCES contact_inquiries(id) ON DELETE CASCADE,
  attachment_index INTEGER NOT NULL,
  chunk_index INTEGER NOT NULL,
  content TEXT NOT NULL,
  PRIMARY KEY (inquiry_id, attachment_index, chunk_index)
);
