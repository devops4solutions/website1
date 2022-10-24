"use strict";(self.webpackChunkdocs_coxautoapi_com=self.webpackChunkdocs_coxautoapi_com||[]).push([[480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?l.createElement(k,a(a({ref:t},u),{},{components:n})):l.createElement(k,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=n(7462),r=(n(7294),n(3905));n(8209);const o={title:"Ansible Setup on AWS EC2 Instance with windows Nodes",date:"2018-06-13",categories:["ansible","aws","devops-tools"]},a=void 0,i={unversionedId:"ansible-setup-on-aws/index",id:"ansible-setup-on-aws/index",title:"Ansible Setup on AWS EC2 Instance with windows Nodes",description:"In this blog, we will do the\xa0Ansible Setup on AWS EC2 Instance with windows Nodes",source:"@site/docs/ansible-setup-on-aws/index.md",sourceDirName:"ansible-setup-on-aws",slug:"/ansible-setup-on-aws/",permalink:"/docs/ansible-setup-on-aws/",draft:!1,editUrl:"https://devops4solutions.github.io/docs/edit/main/docs/ansible-setup-on-aws/index.md",tags:[],version:"current",frontMatter:{title:"Ansible Setup on AWS EC2 Instance with windows Nodes",date:"2018-06-13",categories:["ansible","aws","devops-tools"]},sidebar:"tutorialSidebar",previous:{title:"Analyze VPC Flow log using EK",permalink:"/docs/analyze-vpc-flow-log-using-ek/"}},s={},p=[{value:"<strong>Prerequisite of\xa0Ansible Setup</strong>",id:"prerequisite-ofansible-setup",level:3},{value:"<strong>Three servers</strong>",id:"three-servers",level:3},{value:"create file named inventory by using\xa0command",id:"create-file-named-inventory-by-usingcommand",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this blog, we will do the\xa0Ansible Setup on AWS EC2 Instance with windows Nodes"),(0,r.kt)("h3",{id:"prerequisite-ofansible-setup"},(0,r.kt)("strong",{parentName:"h3"},"Prerequisite of\xa0Ansible Setup")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Python")),(0,r.kt)("p",null,"2","."," SSH"),(0,r.kt)("h3",{id:"three-servers"},(0,r.kt)("strong",{parentName:"h3"},"Three servers")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ansible control Server")," ( Install ansible using epel repository)- On AWS you have to enable this file"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WebServer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DBServer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to connect between these servers\xa0?")),(0,r.kt)("p",null,"To ping these servers(webserver and dbserver) from ansible control server\xa0, you have to add one inbound rule \u201cAll ICAMP traffic\u201d in both the instances)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ansible Control Server")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install Ansible on AWSLinux")),(0,r.kt)("p",null,"sudo yum update\nvim /etc/yum.repos.d/epel.repo"),(0,r.kt)("p",null,"or"),(0,r.kt)("p",null,"sudo yum-config-manager --enable epel"),(0,r.kt)("p",null,"yum repolist ( you should see epel)"),(0,r.kt)("p",null,"yum install ansible"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Second Method of installing ansible")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'if getting sudo pip command not found\nsudo env "PATH=$PATH" pip install pytz\nsudo pip install ansible\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*vn9gkKZYIVC_vDi2wXYsCg.png",alt:null})),(0,r.kt)("p",null,"Ansible Version"),(0,r.kt)("p",null,"Ansible installed successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a Windows EC2 Instance")),(0,r.kt)("p",null,"Check ping command"),(0,r.kt)("p",null,"Next make sure the Amazon network rules allow\xa0",(0,r.kt)("em",{parentName:"p"},"Echo Requests"),". Go to the\xa0",(0,r.kt)("strong",{parentName:"p"},"Security Group"),"\xa0for the EC2."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"right click, select\xa0",(0,r.kt)("strong",{parentName:"li"},"inbound rules")),(0,r.kt)("li",{parentName:"ul"},"A: select\xa0",(0,r.kt)("strong",{parentName:"li"},"Add Rule")),(0,r.kt)("li",{parentName:"ul"},"B: Select\xa0",(0,r.kt)("strong",{parentName:"li"},"Custom ICMP Rule\u200a\u2014\u200aIPv4")),(0,r.kt)("li",{parentName:"ul"},"C: Select\xa0",(0,r.kt)("strong",{parentName:"li"},"Echo Request")),(0,r.kt)("li",{parentName:"ul"},"D: Select either\xa0",(0,r.kt)("strong",{parentName:"li"},"Anywhere"),"\xa0or\xa0",(0,r.kt)("strong",{parentName:"li"},"My IP")),(0,r.kt)("li",{parentName:"ul"},"E: Select\xa0",(0,r.kt)("strong",{parentName:"li"},"Save")),(0,r.kt)("li",{parentName:"ul"},"Added All traffic also")),(0,r.kt)("p",null,"If ping doesn\u2019t work, do the below step also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next, Windows firewall blocks inbound Echo requests by default. Allow Echo requests by creating a windows firewall exception\u2026"),(0,r.kt)("li",{parentName:"ul"},"Go to\xa0",(0,r.kt)("strong",{parentName:"li"},"Start"),"\xa0and type\xa0",(0,r.kt)("strong",{parentName:"li"},"Windows Firewall with Advanced Security")),(0,r.kt)("li",{parentName:"ul"},"Select\xa0",(0,r.kt)("strong",{parentName:"li"},"inbound rules"))),(0,r.kt)("p",null,"Prerequisite"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Powershell 3.0 or higher should be installed. (Version 5 is present on AWS EC2 Windows instance). Check version using below command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$PSVersionTable.PSVersion\n")),(0,r.kt)("p",null,"2","."," WinRM setup on windows machine"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ansible/ansible/blob/devel/examples/scripts/ConfigureRemotingForAnsible.ps1"},"script")," on the remote machine and then execute it in PowerShell console as an administrator."),(0,r.kt)("p",null,"powershell.exe -File ConfigureRemotingForAnsible.ps1"),(0,r.kt)("p",null,"powershell.exe -File ConfigureRemotingForAnsible.ps1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ansible Control Server")),(0,r.kt)("p",null,"create folder named windowsplaybook using below command"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"mkdir windowsplaybook")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"cd windowsplaybook/")),(0,r.kt)("h3",{id:"create-file-named-inventory-by-usingcommand"},"create file named inventory by using\xa0command"),(0,r.kt)("p",null,"vi inventory"),(0,r.kt)("p",null,"put in below content"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"[","web","]")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ip address of machine")),(0,r.kt)("p",null,"Create File Named all in group","_","vars folder"),(0,r.kt)("p",null,"Create folder named group","_","vars using mkdir group","_","vars"),(0,r.kt)("p",null,"Create files named all using vi group","_","vars/all and put below contents"),(0,r.kt)("p",null,"ansible","_","user: windows","_","username"),(0,r.kt)("p",null,"ansible","_","password: SecretPasswordGoesHere"),(0,r.kt)("p",null,"ansible","_","port: 5986"),(0,r.kt)("p",null,"ansible","_","connection: winrm"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"#"," The following is necessary for Python 2.7.9+ (or any older Python that has backported SSLContext, eg, Python 2.7.5 on RHEL7) when using default WinRM self-signed certificates:")),(0,r.kt)("p",null,"ansible","_","winrm","_","server","_","cert","_","validation: ignore"),(0,r.kt)("p",null,"after this done please run below command to test if you are able to ping windows machine"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ansible web -i inventory -m win","_","ping\nansible web -i")," ","-","i /home/ec2-user/windowsplaybook/inventory ",(0,r.kt)("em",{parentName:"p"},"-","m win","_","feature")),(0,r.kt)("p",null,"Ansible control server connection with windows nodes is completed."),(0,r.kt)("p",null,"Now run some playbooks"),(0,r.kt)("p",null,"Create a directory with file main.yml"),(0,r.kt)("p",null,"mkdir /home/ec2-user/windowsplaybook/roles/basic/tasks"),(0,r.kt)("p",null,"vi main.yml"),(0,r.kt)("p",null,"ansible-playbook -i /home/ec2-user/windowsplaybook/inventory main.yml"),(0,r.kt)("p",null,"[","root@ip-10\u20130\u20130\u201320 tasks","]","# cat main.yml\n\u2014\u200a-"),(0,r.kt)("h1",{id:"yaml-documents-begin-with-the-document-separator-"},"YAML documents begin with the document separator\u200a\u2014\u200a-"),(0,r.kt)("h1",{id:"the-minus-in-yaml-this-indicates-a-list-item-the-playbook-contains-a-list"},"The minus in YAML this indicates a list item. The playbook contains a list"),(0,r.kt)("h1",{id:"of-plays-with-each-play-being-a-dictionary"},"of plays, with each play being a dictionary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h1",{id:"target-where-our-play-will-run-and-options-it-will-run-with"},"Target: where our play will run and options it will run with"),(0,r.kt)("p",null,"hosts: all"),(0,r.kt)("h1",{id:"task-the-list-of-tasks-that-will-be-executed-within-the-play-this-section"},"Task: the list of tasks that will be executed within the play, this section"),(0,r.kt)("h1",{id:"can-also-be-used-for-pre-and-post-tasks"},"can also be used for pre and post tasks"),(0,r.kt)("p",null,"tasks:\n\u2014\u200aname: Set a fact\nset","_","fact:\nour","_","fact: Ansible Rocks!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: Install IIs WebServer\nwin","_","feature:\nname: Web-Server\nstate: present\n\u2014\u200aname: Install IIS\nwin","_","feature:\nname: Web-Mgmt-Tools,\nWeb-Mgmt-Console,\nWeb-Scripting-Tools,\nWeb-Mgmt-Service\nstate: present\ninclude","_","sub","_","features: no")),(0,r.kt)("h1",{id:"three-dots-indicate-the-end-of-a-yaml-document"},"Three dots indicate the end of a YAML document"),(0,r.kt)("p",null,"\u2026"))}c.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);