# Alternative: NodeBB Forum Setup

If Discourse proves too complex for Render, here's a simpler alternative:

## NodeBB - Modern Forum Platform

NodeBB is a Node.js-based forum that's easier to deploy on Render.

### Quick Setup Command:

```bash
# Create a new NodeBB instance
curl -X POST "https://api.render.com/v1/services" \
  -H "Authorization: Bearer rnd_9a3fo91NHCrQ3XWT24jFpNSI2FOi" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "web_service",
    "name": "nexus-nodebb",
    "ownerId": "tea-d0npueruibrs738slb70",
    "repo": "https://github.com/NodeBB/NodeBB",
    "branch": "main",
    "serviceDetails": {
      "env": "node",
      "envSpecificDetails": {
        "buildCommand": "npm install --production",
        "startCommand": "node app.js"
      },
      "plan": "starter",
      "region": "oregon",
      "openPorts": [{"port": 10000, "protocol": "TCP"}]
    }
  }'
```

### Environment Variables for NodeBB:
- `url`: https://nexus-nodebb.onrender.com
- `database`: postgres
- `postgres:host`: ep-square-cake-aevxhoqm-pooler.us-east-2.aws.neon.tech
- `postgres:database`: neondb
- `postgres:username`: neondb_owner
- `postgres:password`: npg_WwkCPa9YK3HI
- `redis:host`: Your Redis host
- `redis:port`: 6379






