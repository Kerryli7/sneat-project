import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const avatarData = [
  { name: 'Remy Sharp', src: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png' },
  { name: 'Travis Howard', src: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/12.png' },
  { name: 'Cindy Baker', src: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/9.png' },
  { name: 'Remy Sharp', src: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/6.png' },
  { name: 'Travis Howard', src: 'https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/14.png' },
];

export default function ImageAvatars() {
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  const handleAvatarHover = (index) => {
    setHoveredAvatar(index);
  };

  const handleAvatarLeave = () => {
    setHoveredAvatar(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      <AvatarGroup max={7}>
        {avatarData.map((avatar, index) => (
          <div
            key={index}
            onMouseEnter={() => handleAvatarHover(index)}
            onMouseLeave={handleAvatarLeave}
            style={{
              position: 'absolute',
              left: `${index * 35}px`, // 调整叠放位置
              zIndex: index, // 控制叠放顺序
            }}
          >
            <Avatar
              alt={avatar.name}
              src={avatar.src}
              style={{
                transform: hoveredAvatar === index ? 'translateY(-10px)' : 'none',
                transition: 'transform 0.3s ease',
              }}
            />
            {hoveredAvatar === index && (
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '5px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {avatar.name}
              </div>
            )}
          </div>
        ))}
      </AvatarGroup>
    </div>
  );
}