# API Authentication

*Auto-generated from OpenAPI specification • Last updated: 2 minutes ago*

## Overview

ScaffoldSmart API uses Bearer token authentication to secure all endpoints. This guide shows you how to authenticate your requests and manage API keys.

## Getting Your API Key

1. Navigate to your ScaffoldSmart dashboard
2. Go to **Settings** → **API Keys**
3. Click **Generate New Key**
4. Copy and securely store your key

> ⚠️ **Security Note**: Never expose API keys in client-side code or public repositories.

## Authentication Methods

### Bearer Token (Recommended)

Include your API key in the Authorization header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     https://api.scaffoldsmart.com/v1/docs
```

### Query Parameter (Not Recommended)

For testing only - not recommended for production:

```bash
curl "https://api.scaffoldsmart.com/v1/docs?api_key=YOUR_API_KEY"
```

## Response Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 401 | Invalid or missing API key |
| 403 | API key lacks required permissions |
| 429 | Rate limit exceeded |

## Rate Limiting

- **Free tier**: 100 requests per hour
- **Pro tier**: 1,000 requests per hour  
- **Enterprise**: Custom limits

Rate limit headers are included in all responses:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642694400
```

## Example: Complete Request

```javascript
const response = await fetch('https://api.scaffoldsmart.com/v1/docs', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

if (response.ok) {
  const data = await response.json();
  console.log('Documentation projects:', data);
} else {
  console.error('Authentication failed:', response.status);
}
```

---

*This documentation is automatically maintained by Kiro. Changes to the API specification will update this guide within minutes.*