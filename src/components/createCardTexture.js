import * as THREE from 'three';

const PROFILE_IMAGE_URL =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=face';

export default function createCardTexture() {
  const W = 2048;
  const H = 2800;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  
  // 1. Lanyard Holder Background (Mesh Gradient)
  const bgGrad = ctx.createLinearGradient(0, 0, W, H * 0.7);
  bgGrad.addColorStop(0.0, '#0D47A1');  // Deep blue left
  bgGrad.addColorStop(0.35, '#00ACC1'); // Turquoise
  bgGrad.addColorStop(0.65, '#43A047'); // Vibrant green center-right
  bgGrad.addColorStop(0.9, '#C0CA33');  // Light yellow-green
  bgGrad.addColorStop(1.0, '#FFF59D');  // Soft light yellow right  
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);
  
  // Add some radial blur to make it "mesh" like
  const radGrad1 = ctx.createRadialGradient(W*0.2, H*0.8, 0, W*0.2, H*0.8, W*0.6);
  radGrad1.addColorStop(0, 'rgba(25, 118, 210, 0.4)');
  radGrad1.addColorStop(1, 'rgba(25, 118, 210, 0)');
  ctx.fillStyle = radGrad1;
  ctx.fillRect(0,0,W,H);
  
  // Holder Edges (Padded rim highlights/shadows to simulate bevel)
  ctx.lineWidth = 32;
  const edgeGrad = ctx.createLinearGradient(0, 0, W, H);
  edgeGrad.addColorStop(0, 'rgba(255,255,255,0.7)'); // Highlight top-left
  edgeGrad.addColorStop(0.4, 'rgba(255,255,255,0.1)');
  edgeGrad.addColorStop(0.6, 'rgba(0,0,0,0.1)');
  edgeGrad.addColorStop(1, 'rgba(0,0,0,0.6)');       // Shadow bottom-right
  ctx.strokeStyle = edgeGrad;
  roundRect(ctx, 16, 16, W-32, H-32, 40);
  ctx.stroke();

  // Lanyard Cutout Slot
  const slotW = 200, slotH = 50;
  const slotX = W/2 - slotW/2, slotY = 80;
  const glow = ctx.createRadialGradient(W/2, slotY + slotH/2, 0, W/2, slotY + slotH/2, slotW);
  glow.addColorStop(0, '#FFFFFF');
  glow.addColorStop(1, '#FFF9C4'); // Soft light from behind
  ctx.fillStyle = glow;
  roundRect(ctx, slotX, slotY, slotW, slotH, slotH/2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,0.4)';
  ctx.lineWidth = 6;
  ctx.stroke();

  // 2. Inserted White Card
  const padX = 100;
  const padTop = 220;
  const padBottom = 100;
  const cardW = W - padX*2;
  const cardH = H - padTop - padBottom;
  const cardR = 40;
  
  // Holder casting shadow on white card
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowBlur = 80;
  ctx.shadowOffsetY = 30;
  ctx.fillStyle = '#FFFFFF';
  roundRect(ctx, padX, padTop, cardW, cardH, cardR);
  ctx.fill();
  
  // Clear shadows
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // 3. Card Content
  const pL = padX + 100;
  const pR = padX + cardW - 100;
  let cy = padTop + 120;

  // Profile Image Base
  const phX = pL;
  const phY = cy;
  const phS = 300;
  const phR = 40;

  ctx.fillStyle = '#EEEEEE';
  roundRect(ctx, phX, phY, phS, phS, phR);
  ctx.fill();

  // Career ID Label
  const cidText = 'Career ID: ILC445378';
  ctx.font = '700 40px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const cidW = ctx.measureText(cidText).width + 70;
  const cidH = 78;
  const cidX = pR - cidW;
  
  ctx.strokeStyle = '#F57C00';
  ctx.lineWidth = 6;
  roundRect(ctx, cidX, cy + 18, cidW, cidH, cidH/2);
  ctx.stroke();
  
  ctx.fillStyle = '#F57C00';
  ctx.fillText(cidText, cidX + 35, cy + 18 + 52);

  // Name & Subtext
  cy += phS + 140;
  ctx.fillStyle = '#111111';
  ctx.font = 'bold 120px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText('Jane Doe', pL, cy);
  
  cy += 70;
  ctx.fillStyle = '#757575';
  ctx.font = '500 56px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText('B.Tech Graduate . Computer Science', pL, cy);

  // Tags Row 1
  cy += 120;
  let tx = pL;
  tx = drawPillTag(ctx, 'Personality: INTJ', tx, cy, pR);
  tx += 25;
  drawPillTag(ctx, 'Experience: 5 years', tx, cy, pR);
  
  // Tags Row 2
  cy += 105;
  tx = pL;
  tx = drawPillTag(ctx, 'JavaScript', tx, cy, pR);
  tx += 25;
  tx = drawPillTag(ctx, 'Front end', tx, cy, pR);
  tx += 25;
  drawPillTag(ctx, 'WebGL', tx, cy, pR);

  // Verification Rows
  cy += 170;
  const vGap = 200;
  drawVerRow(ctx, pL, pR, cy, 'brain', 'Psychometric Profile', 'RIASEC · INTJ · Big 5 · OCEAN');
  drawVerRow(ctx, pL, pR, cy + vGap, 'trophy', '3 Skill Certifications', 'WebGL · JavaScript · AI');
  drawVerRow(ctx, pL, pR, cy + vGap * 2, 'file', 'DigiLocker CV', 'Authenticated · ATS Optimised');

  // Texture creation
  const tex = new THREE.CanvasTexture(canvas);
  tex.flipY = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;

  // Async load profile photo
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    ctx.save();
    ctx.beginPath();
    roundRect(ctx, phX, phY, phS, phS, phR);
    ctx.clip();
    ctx.drawImage(img, phX, phY, phS, phS);
    ctx.restore();
    tex.needsUpdate = true;
  };
  img.src = PROFILE_IMAGE_URL;

  return tex;
}

function drawPillTag(ctx, text, x, y, rightBound) {
  ctx.font = '700 40px -apple-system, BlinkMacSystemFont, sans-serif';
  const cw = ctx.measureText(text).width;
  const w = cw + 64, h = 78;
  if (x + w > rightBound) return x;
  
  ctx.fillStyle = '#E8EAF6'; // Delicate blue-lilac
  roundRect(ctx, x, y, w, h, h/2);
  ctx.fill();
  
  ctx.fillStyle = '#1A237E'; // Dark blue font
  ctx.fillText(text, x + 32, y + 54);
  return x + w;
}

function drawVerRow(ctx, left, right, y, iconType, title, subtitle) {
  const icoSize = 120;
  const icoR = 30;
  
  // Icon box
  ctx.fillStyle = '#FFF8E1'; // Cream-tan
  ctx.shadowColor = 'rgba(0,0,0,0.06)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 6;
  roundRect(ctx, left, y, icoSize, icoSize, icoR);
  ctx.fill();
  ctx.shadowColor = 'transparent';
  
  // Custom Icons
  const cx = left + icoSize/2;
  const cyA = y + icoSize/2;
  ctx.fillStyle = '#E65100'; // Dark orange
  
  if (iconType === 'brain') {
     ctx.beginPath();
     ctx.arc(cx - 20, cyA - 14, 24, 0, Math.PI*2);
     ctx.arc(cx + 20, cyA - 14, 24, 0, Math.PI*2);
     ctx.arc(cx, cyA + 20, 24, 0, Math.PI*2);
     ctx.fill();
  } else if (iconType === 'trophy') {
     ctx.beginPath();
     ctx.moveTo(cx - 26, cyA + 32);
     ctx.lineTo(cx + 26, cyA + 32);
     ctx.lineTo(cx + 14, cyA + 14);
     ctx.lineTo(cx - 14, cyA + 14);
     ctx.fill();
     ctx.beginPath();
     ctx.arc(cx, cyA - 14, 32, 0, Math.PI);
     ctx.fill();
  } else {
     ctx.fillRect(cx - 22, cyA - 30, 44, 60);
     ctx.fillStyle = '#FFF8E1';
     ctx.fillRect(cx + 6, cyA - 30, 16, 16);
     ctx.fillStyle = '#E65100';
     ctx.beginPath();
     ctx.moveTo(cx + 6, cyA - 30);
     ctx.lineTo(cx + 22, cyA - 14);
     ctx.lineTo(cx + 6, cyA - 14);
     ctx.fill();
  }
  
  // Verified Label (draw first to compute text safe width)
  const vText = "Verified";
  ctx.font = '800 38px -apple-system, BlinkMacSystemFont, sans-serif';
  const vtw = ctx.measureText(vText).width;
  const vw = 30 + 18 + vtw + 44; // circle + space + text + padding left/right
  const vh = 62;
  const vx = right - vw;
  const vy = y + (icoSize - vh) / 2;
  
  ctx.fillStyle = '#E8F5E9'; // light green background
  roundRect(ctx, vx, vy, vw, vh, vh/2);
  ctx.fill();
  
  const circR = 15;
  const circX = vx + 22 + circR;
  const circY = vy + vh/2;
  
  ctx.fillStyle = '#A5D6A7'; // small light green circle
  ctx.beginPath();
  ctx.arc(circX, circY, circR, 0, Math.PI*2);
  ctx.fill();
  
  // Dark green full checkmark
  ctx.strokeStyle = '#2E7D32'; 
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(circX - 7, circY - 1);
  ctx.lineTo(circX - 2, circY + 6);
  ctx.lineTo(circX + 9, circY - 7);
  ctx.stroke();
  
  ctx.fillStyle = '#2E7D32'; // dark green text
  ctx.fillText(vText, circX + circR + 16, vy + 44);

  // Text (constrained between icon and Verified pill)
  const tx = left + icoSize + 40;
  const textRight = vx - 26;
  const maxW = Math.max(20, textRight - tx);
  ctx.fillStyle = '#111111';
  ctx.font = '800 48px -apple-system, BlinkMacSystemFont, sans-serif';
  drawTextEllipsis(ctx, title, tx, y + 60, maxW);
  
  ctx.fillStyle = '#757575';
  ctx.font = '700 38px -apple-system, BlinkMacSystemFont, sans-serif';
  drawTextEllipsis(ctx, subtitle, tx, y + 105, maxW);
}

function drawTextEllipsis(ctx, text, x, y, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) {
    ctx.fillText(text, x, y);
    return;
  }
  const ell = '…';
  const ellW = ctx.measureText(ell).width;
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const slice = text.slice(0, mid);
    if (ctx.measureText(slice).width + ellW <= maxWidth) lo = mid;
    else hi = mid - 1;
  }
  const out = text.slice(0, Math.max(0, lo)) + ell;
  ctx.fillText(out, x, y);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
