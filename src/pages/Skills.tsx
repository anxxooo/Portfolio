interface SkillsProps {
  lang: "en" | "fr";
}

function Skills({ lang }: SkillsProps) {
  return (
<section className="w-full bg-[#0b0c10] py-24 px-6">
  <h2 className="text-3xl md:text-6xl font-bold text-white text-center mb-12 mx-20 text-white ">
    {lang === "en" ? "Skills" : "Compétences"}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
        {lang === "en" ? "Cybersecurity" : "Cybersécurité"}
      </h3>
      <p className="text-gray-300 text-sm">
        {lang === "en" ? "Strong knowledge of cybersecurity concepts, cryptography, and best practices for authentication and access control. Familiarity with permission management, firewalls, and threat detection. Understanding of vulnerabilities, common threats, and mitigation strategies." 
        : "Connaissances solides en concepts de cybersécurité, cryptographie et bonnes pratiques d'authentification et contrôle d'accès. Familiarité avec la gestion des permissions, firewalls et détection de menaces. Compréhension des vulnérabilités, menaces courantes et stratégies de mitigation."}
      </p>
    </div>

    <div className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center gap-2">
        DevOps
      </h3>
      <p className="text-gray-300 text-sm">
        {lang === "en" ? "Configuration management and automation with Ansible, with some exposure to Docker and Jenkins. Familiarity with CI/CD principles, automated deployment, and system supervision. Practical experience with monitoring tools and service management to ensure availability and performance." 
        : "Gestion de configuration et automatisation avec Ansible, ainsi qu’une initiation à Docker et Jenkins. Familiarité avec les principes CI/CD, déploiement automatisé et supervision des systèmes. Expérience pratique des outils de monitoring et de gestion des services pour assurer disponibilité et performance."}
      </p>
    </div>

    <div className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-purple-400 mb-2 flex items-center gap-2">
        {lang === "en" ? "Systems" : "Systèmes"}
      </h3>
      <p className="text-gray-300 text-sm">
        {lang === "en" ? "Solid foundation in Linux administration across various distributions (Ubuntu, Debian, RHEL), including user, group, and permission management. Familiarity with package management, system monitoring, and performance supervision. Understanding of partitions, file systems, and storage management."
        : "Bonnes bases en administration Linux sur diverses distributions (Ubuntu, Debian, RHEL), gestion des utilisateurs, groupes et permissions. Familiarité avec la gestion des paquets, le monitoring système et la supervision des performances. Compréhension des partitions, systèmes de fichiers et gestion du stockage."}
      </p>
    </div>

    <div className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center gap-2">
        {lang === "en" ? "Networks" : "Réseaux"}
      </h3>
      <p className="text-gray-300 text-sm">
         {lang === "en" ? "Linux network administration and configuration, including management of IP addresses, routes, and interfaces. Knowledge of TCP/IP, SSH, FTP, and NAT protocols, as well as network security and segmentation concepts. Familiarity with network analysis and diagnostic tools such as Wireshark, Nmap, tcpdump, and firewall configuration (iptables, firewalld)." 
         : "Administration et configuration réseau sous Linux, gestion des adresses IP, routes et interfaces. Connaissance des protocoles TCP/IP, SSH, FTP et NAT, ainsi que des concepts de sécurité et segmentation réseau. Familiarité avec les outils d'analyse et de diagnostic réseau tels que Wireshark, Nmap, tcpdump et la configuration de firewalls (iptables, firewalld)."}
      </p>
    </div>

    <div className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-purple-400 mb-2 flex items-center gap-2">
        {lang === "en" ? "Development" : "Développement"}
      </h3>
      <p className="text-gray-300 text-sm">
        {lang === "en" ? "Development with Python, Java, and web full-stack frameworks (Django, Angular, and MERN), integrating security principles. Knowledge of best practices for application security and prevention of common vulnerabilities (XSS, SQL injection, CSRF)." 
        : "Développement avec Python, Java, et web fullstack (Django, Angular et MERN), en intégrant les principes de sécurité. Connaissance des bonnes pratiques de sécurisation des applications et prévention des vulnérabilités courantes (XSS, SQL injection, CSRF)."}
        </p>
    </div>
        <div className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
        {lang === "en" ? "Virtualization" : "Virtualisation"}
      </h3>
      <p className="text-gray-300 text-sm">
        {lang === "en" ? "Experience with virtualization technologies such as VMware, VirtualBox, and Docker. Understanding of containerization concepts and best practices for deploying applications in virtualized environments." 
        : "Expérience avec les technologies de virtualisation telles que VMware, VirtualBox et Docker. Compréhension des concepts de conteneurisation et des bonnes pratiques pour déployer des applications dans des environnements virtualisés."}
        </p>
    </div>
  </div>
</section>
    );
}
export default Skills;