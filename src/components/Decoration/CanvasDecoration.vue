<template>
  <canvas ref="canvas" class="decoration"></canvas>
</template>

<script>
export default {
  name: 'CanvasDecoration',
  mounted() {
    this.drawCanvas();
    window.addEventListener('resize', this.drawCanvas);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.drawCanvas);
  },
  methods: {
    drawCanvas() {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');

      const width = canvas.parentElement.offsetWidth;
      const height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      // Clear canvas
      context.clearRect(0, 0, width, height);

      // Draw the shapes
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(width * 0.48, 0);
      context.lineTo(width, height);
      context.lineTo(0, height);
      context.closePath();
      const gradient = context.createLinearGradient(0, height, width * 0.63, height * 0.05);
      gradient.addColorStop(0, '#091871');
      gradient.addColorStop(1, '#426EBF');
      context.fillStyle = gradient;
      context.fill();
      context.strokeStyle = 'black';
      context.stroke();

      context.beginPath();
      context.moveTo(width * 0.43, 0);
      context.lineTo(width * 0.45, 0);
      context.lineTo(width * 0.97, height);
      context.lineTo(width * 0.95, height);
      context.closePath();
      context.fillStyle = 'white';
      context.fill();

      context.beginPath();
      context.moveTo(width * 0.45, 0);
      context.lineTo(width * 0.48, 0);
      context.lineTo(width, height);
      context.lineTo(width * 0.97, height);
      context.closePath();
      context.fillStyle = '#FF0000';
      context.shadowColor = 'rgba(255, 0, 0, 0.54)';
      context.shadowOffsetX = 16;
      context.shadowOffsetY = 1;
      context.shadowBlur = 5.5;
      context.fill();
    }
    // mobile version
  }
}
</script>

<style scoped>
.decoration {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  pointer-events: none;

}
</style>
