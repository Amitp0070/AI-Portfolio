import React from 'react';
import {
    SiLaravel,
    SiDjango,
    SiMysql,
    SiPostgresql,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiBootstrap,
    SiPhp,
    SiPython,
    SiPostman,
    SiGit,
    SiGithub,
    SiJavascript,
    SiTypescript,
    SiDocker,
    SiNginx,
    SiFirebase,
    SiVercel,
} from 'react-icons/si';

import { FaServer, FaAws } from 'react-icons/fa';

/**
 * NOTE:
 * - size fixed for consistency
 * - colors = official branding (balanced for UI)
 * - GitHub/Vercel handled via CSS (so they work in both themes)
 */

const ICON_SIZE = 40;

export const techIcons: Record<string, React.ReactNode> = {
    // ================= BACKEND =================
    Laravel: <SiLaravel color="#FF2D20" size={ICON_SIZE} />,
    Django: <SiDjango color="#01b670ff" size={ICON_SIZE} />,
    MySQL: <SiMysql color="#00d5ffff" size={ICON_SIZE} />,
    PostgreSQL: <SiPostgresql color="#008cffff" size={ICON_SIZE} />,
    'REST APIs': <FaServer color="#6C63FF" size={ICON_SIZE} />,
    RBAC: <FaServer color="#6C63FF" size={ICON_SIZE} />,

    // ================= FRONTEND =================
    HTML: <SiHtml5 color="#E34F26" size={ICON_SIZE} />,
    CSS: <SiCss color="#1572B6" size={ICON_SIZE} />,
    'Tailwind CSS': <SiTailwindcss color="#06B6D4" size={ICON_SIZE} />,
    Bootstrap: <SiBootstrap color="#7952B3" size={ICON_SIZE} />,

    // ================= LANGUAGES =================
    PHP: <SiPhp color="#777BB4" size={ICON_SIZE} />,
    Python: <SiPython color="#3776AB" size={ICON_SIZE} />,
    JavaScript: <SiJavascript color="#F7DF1E" size={ICON_SIZE} />,
    TypeScript: <SiTypescript color="#3178C6" size={ICON_SIZE} />,

    // ================= TOOLS =================
    Postman: <SiPostman color="#FF6C37" size={ICON_SIZE} />,
    Git: <SiGit color="#F05032" size={ICON_SIZE} />,
    GitHub: <SiGithub className="icon-adaptive" size={ICON_SIZE} />,

    // ================= DEVOPS / CLOUD =================
    AWS: <FaAws color="#FF9900" size={ICON_SIZE} />,
    Docker: <SiDocker color="#2496ED" size={ICON_SIZE} />,
    Nginx: <SiNginx color="#269516" size={ICON_SIZE} />,
    Firebase: <SiFirebase color="#FFCA28" size={ICON_SIZE} />,
    Vercel: <SiVercel className="icon-adaptive" size={ICON_SIZE} />,
};