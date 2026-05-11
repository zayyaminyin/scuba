@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Abyssal Technical palette */
    --background: 220 40% 4%;
    --foreground: 210 20% 98%;

    --card: 220 40% 6%;
    --card-foreground: 210 20% 98%;

    --popover: 220 40% 6%;
    --popover-foreground: 210 20% 98%;

    --primary: 0 85% 55%;             /* Signal Red */
    --primary-foreground: 220 40% 4%;

    --secondary: 220 30% 10%;
    --secondary-foreground: 210 20% 98%;

    --muted: 220 25% 12%;
    --muted-foreground: 215 15% 55%;

    --accent: 180 100% 50%;           /* Bioluminescent Cyan */
    --accent-foreground: 220 40% 4%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 210 20% 98%;

    --border: 210 30% 98% / 0.08;
    --input: 220 30% 14%;
    --ring: 0 85% 55%;

    --radius: 0.125rem;

    --gradient-abyss: linear-gradient(180deg, hsl(220 40% 4% / 0) 0%, hsl(220 40% 4%) 100%);
    --shadow-glow: 0 0 80px hsl(180 100% 50% / 0.15);
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Inter', sans-serif;
    font-feature-settings: 'cv02', 'cv03', 'cv11', 'ss01';
  }
}

@layer utilities {
  .font-display { font-family: 'Anton', 'Inter', sans-serif; letter-spacing: -0.02em; }
  .font-mono   { font-family: 'JetBrains Mono', ui-monospace, monospace; }

  .scanlines {
    background-image: linear-gradient(to bottom, transparent 50%, hsl(0 0% 100% / 0.04) 50%);
    background-size: 100% 4px;
  }

  .text-stroke {
    -webkit-text-stroke: 2px hsl(var(--foreground));
    color: transparent;
  }
}

@keyframes fade-up {
  0%   { opacity: 0; transform: translateY(40px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0);   filter: blur(0); }
}
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.3; }
}
@keyframes float-slow {
  0%, 100% { transform: translateY(0) scale(1); }
  50%      { transform: translateY(-20px) scale(1.02); }
}
