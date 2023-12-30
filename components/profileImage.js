import Image from 'next/image'
import { useEffect, useRef } from 'react'

const profileImage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const container = containerRef.current;
      const { left, top, width, height } = container.getBoundingClientRect()

      const mouseX = event.clientX - left
      const mouseY = event.clientY - top

      const tiltX = (width / 2 - mouseX) / 20;
      const tiltY = (height / 2 - mouseY) / 20;

      container.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    }

    const handleMouseLeave = () => {
      const container = containerRef.current;
      container.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [])

  return (
    <div ref={containerRef}>
      <div className="bg-yellow-500 image-block1" />
      <div className="bg-red-500 image-block2" />
      <div className="bg-blue-500 image-block3" />
      <div className="image">
        <Image src="/profile.png" alt="Profile Image" width={150} height={150} style={{ borderRadius: '100px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)'}}/> 
      </div>
    </div>
  )
}

export default profileImage
