import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: CasinoElement[] = [];
    const particleCount = 35;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class CasinoElement {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      type: 'chip' | 'card' | 'dice' | 'coin' | 'spade' | 'heart' | 'diamond' | 'club';
      color: string;
      opacity: number;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 15;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.type = this.getRandomType();
        this.color = this.getTypeColor();
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      getRandomType(): 'chip' | 'card' | 'dice' | 'coin' | 'spade' | 'heart' | 'diamond' | 'club' {
        const types = ['chip', 'card', 'dice', 'coin', 'spade', 'heart', 'diamond', 'club'];
        return types[Math.floor(Math.random() * types.length)] as any;
      }

      getTypeColor(): string {
        const colors = {
          chip: '#eab308', // Gold
          card: '#f8fafc', // White
          dice: '#fbbf24', // Amber
          coin: '#d97706', // Orange
          spade: '#1f2937', // Dark
          heart: '#dc2626', // Red
          diamond: '#dc2626', // Red
          club: '#1f2937' // Dark
        };
        return colors[this.type];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        this.pulsePhase += 0.02;

        // Wrap around screen edges
        if (this.x > canvas.width + this.size) {
          this.x = -this.size;
        } else if (this.x < -this.size) {
          this.x = canvas.width + this.size;
        }

        if (this.y > canvas.height + this.size) {
          this.y = -this.size;
        } else if (this.y < -this.size) {
          this.y = canvas.height + this.size;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Add subtle pulsing effect
        const pulseScale = 1 + Math.sin(this.pulsePhase) * 0.1;
        ctx.scale(pulseScale, pulseScale);
        
        ctx.globalAlpha = this.opacity;

        switch (this.type) {
          case 'chip':
            this.drawChip(ctx);
            break;
          case 'card':
            this.drawCard(ctx);
            break;
          case 'dice':
            this.drawDice(ctx);
            break;
          case 'coin':
            this.drawCoin(ctx);
            break;
          case 'spade':
            this.drawSpade(ctx);
            break;
          case 'heart':
            this.drawHeart(ctx);
            break;
          case 'diamond':
            this.drawDiamond(ctx);
            break;
          case 'club':
            this.drawClub(ctx);
            break;
        }

        ctx.restore();
      }

      drawChip(ctx: CanvasRenderingContext2D) {
        // Main chip circle
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Inner ring
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.8, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Center circle
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Decorative lines
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const startX = Math.cos(angle) * (this.size * 0.4);
          const startY = Math.sin(angle) * (this.size * 0.4);
          const endX = Math.cos(angle) * (this.size * 0.7);
          const endY = Math.sin(angle) * (this.size * 0.7);
          
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      drawCard(ctx: CanvasRenderingContext2D) {
        const width = this.size * 0.7;
        const height = this.size;
        
        // Card background
        ctx.fillStyle = this.color;
        ctx.fillRect(-width/2, -height/2, width, height);
        
        // Card border
        ctx.strokeStyle = '#d1d5db';
        ctx.lineWidth = 1;
        ctx.strokeRect(-width/2, -height/2, width, height);
        
        // Corner radius effect
        ctx.fillStyle = '#374151';
        ctx.font = `${this.size * 0.3}px serif`;
        ctx.textAlign = 'center';
        ctx.fillText('A', 0, this.size * 0.1);
      }

      drawDice(ctx: CanvasRenderingContext2D) {
        const size = this.size * 0.8;
        
        // Dice face
        ctx.fillStyle = this.color;
        ctx.fillRect(-size/2, -size/2, size, size);
        
        // Dice border
        ctx.strokeStyle = '#374151';
        ctx.lineWidth = 2;
        ctx.strokeRect(-size/2, -size/2, size, size);
        
        // Dots (showing 6)
        ctx.fillStyle = '#1f2937';
        const dotSize = size * 0.12;
        const positions = [
          [-size*0.25, -size*0.25], [size*0.25, -size*0.25],
          [-size*0.25, 0], [size*0.25, 0],
          [-size*0.25, size*0.25], [size*0.25, size*0.25]
        ];
        
        positions.forEach(([x, y]) => {
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      drawCoin(ctx: CanvasRenderingContext2D) {
        // Coin body
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Coin edge
        ctx.strokeStyle = '#92400e';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Dollar sign
        ctx.fillStyle = '#451a03';
        ctx.font = `bold ${this.size * 0.8}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('$', 0, 0);
      }

      drawSpade(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        
        // Spade shape
        ctx.moveTo(0, -this.size);
        ctx.quadraticCurveTo(-this.size * 0.6, -this.size * 0.3, -this.size * 0.3, 0);
        ctx.quadraticCurveTo(0, this.size * 0.3, 0, 0);
        ctx.quadraticCurveTo(0, this.size * 0.3, this.size * 0.3, 0);
        ctx.quadraticCurveTo(this.size * 0.6, -this.size * 0.3, 0, -this.size);
        
        // Stem
        ctx.rect(-this.size * 0.1, 0, this.size * 0.2, this.size * 0.4);
        ctx.fill();
      }

      drawHeart(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        
        // Heart shape
        const x = 0, y = 0;
        ctx.moveTo(x, y + this.size * 0.3);
        ctx.bezierCurveTo(x, y, x - this.size * 0.5, y - this.size * 0.5, x - this.size * 0.5, y - this.size * 0.2);
        ctx.bezierCurveTo(x - this.size * 0.5, y - this.size * 0.7, x, y - this.size * 0.7, x, y - this.size * 0.2);
        ctx.bezierCurveTo(x, y - this.size * 0.7, x + this.size * 0.5, y - this.size * 0.7, x + this.size * 0.5, y - this.size * 0.2);
        ctx.bezierCurveTo(x + this.size * 0.5, y - this.size * 0.5, x, y, x, y + this.size * 0.3);
        ctx.fill();
      }

      drawDiamond(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        
        // Diamond shape
        ctx.moveTo(0, -this.size);
        ctx.lineTo(this.size * 0.6, 0);
        ctx.lineTo(0, this.size);
        ctx.lineTo(-this.size * 0.6, 0);
        ctx.closePath();
        ctx.fill();
      }

      drawClub(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        
        // Three circles for club
        ctx.beginPath();
        ctx.arc(-this.size * 0.3, -this.size * 0.2, this.size * 0.3, 0, Math.PI * 2);
        ctx.arc(this.size * 0.3, -this.size * 0.2, this.size * 0.3, 0, Math.PI * 2);
        ctx.arc(0, this.size * 0.1, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Stem
        ctx.fillRect(-this.size * 0.1, this.size * 0.2, this.size * 0.2, this.size * 0.4);
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new CasinoElement());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw(ctx);
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;