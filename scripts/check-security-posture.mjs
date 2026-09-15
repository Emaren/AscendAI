import fs from 'node:fs';
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (pkg.dependencies?.next !== '16.3.5') throw new Error('Next.js must remain pinned to 16.3.5');
const unit = fs.readFileSync('ops/systemd/ascendai-web.service', 'utf8');
for (const rule of [
  'User=tony', 'NoNewPrivileges=yes', 'PrivateTmp=yes', 'ProtectSystem=strict',
  'ProtectHome=yes', 'CapabilityBoundingSet=', 'NoExecPaths=/tmp /var/tmp /dev/shm'
]) {
  if (!unit.includes(rule)) throw new Error(`missing hardening rule: ${rule}`);
}
console.log('AscendAI security posture PASS');
