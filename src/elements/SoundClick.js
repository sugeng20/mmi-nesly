export default function SoundClick() {
  const bel = new Audio("/audio/klik.mp3");
  bel.currentTime = 0;
  bel.play();
}
