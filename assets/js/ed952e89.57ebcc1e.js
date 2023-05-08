"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[1729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"commands/podman-generate/podman-generate-systemd",id:"commands/podman-generate/podman-generate-systemd",title:"podman-generate-systemd",description:"% podman-generate-systemd 1",source:"@site/docs/commands/podman-generate/podman-generate-systemd.md",sourceDirName:"commands/podman-generate",slug:"/commands/podman-generate/podman-generate-systemd",permalink:"/docs/commands/podman-generate/podman-generate-systemd",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-generate/podman-generate-systemd.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-generate-spec",permalink:"/docs/commands/podman-generate/podman-generate-spec"},next:{title:"podman-healthcheck",permalink:"/docs/commands/podman-healthcheck/"}},d={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"Kubernetes Integration",id:"kubernetes-integration",level:3},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--after</strong>=<em>dependency_name</em>",id:"--afterdependency_name",level:4},{value:"<strong>--container-prefix</strong>=<em>prefix</em>",id:"--container-prefixprefix",level:4},{value:"<strong>--env</strong>, <strong>-e</strong>=<em>env</em>",id:"--env--eenv",level:4},{value:"<strong>--files</strong>, <strong>-f</strong>",id:"--files--f",level:4},{value:"<strong>--format</strong>=<em>format</em>",id:"--formatformat",level:4},{value:"<strong>--name</strong>, <strong>-n</strong>",id:"--name--n",level:4},{value:"<strong>--new</strong>",id:"--new",level:4},{value:"<strong>--no-header</strong>",id:"--no-header",level:4},{value:"<strong>--pod-prefix</strong>=<em>prefix</em>",id:"--pod-prefixprefix",level:4},{value:"<strong>--requires</strong>=<em>dependency_name</em>",id:"--requiresdependency_name",level:4},{value:"<strong>--restart-policy</strong>=<em>policy</em>",id:"--restart-policypolicy",level:4},{value:"<strong>--restart-sec</strong>=<em>time</em>",id:"--restart-sectime",level:4},{value:"<strong>--separator</strong>=<em>separator</em>",id:"--separatorseparator",level:4},{value:"<strong>--start-timeout</strong>=<em>value</em>",id:"--start-timeoutvalue",level:4},{value:"<strong>--stop-timeout</strong>=<em>value</em>",id:"--stop-timeoutvalue",level:4},{value:"<strong>--template</strong>",id:"--template",level:4},{value:"<strong>--wants</strong>=<em>dependency_name</em>",id:"--wantsdependency_name",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"Generate and print a systemd unit file for a container",id:"generate-and-print-a-systemd-unit-file-for-a-container",level:3},{value:"Generate systemd unit file for a container with <code>--new</code> flag",id:"generate-systemd-unit-file-for-a-container-with---new-flag",level:3},{value:"Generate systemd unit files for a pod with two simple alpine containers",id:"generate-systemd-unit-files-for-a-pod-with-two-simple-alpine-containers",level:3},{value:"Installation of generated systemd unit files.",id:"installation-of-generated-systemd-unit-files",level:3},{value:"Use <code>systemctl</code> to perform operations on generated installed unit files.",id:"use-systemctl-to-perform-operations-on-generated-installed-unit-files",level:3},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],p={toc:l},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-generate-systemd 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","generate","-","systemd - Generate systemd unit file(s) for a container or pod"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman generate systemd")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"container|pod")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman generate systemd")," will create a systemd unit file that can be used to control a container or pod.\nBy default, the command will print the content of the unit files to stdout."),(0,r.kt)("p",null,"Generating unit files for a pod requires the pod to be created with an infra container (see ",(0,r.kt)("inlineCode",{parentName:"p"},"--infra=true"),"). An infra container runs across the entire lifespan of a pod and is hence required for systemd to manage the life cycle of the pod's main unit."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note: When using this command with the remote client, including Mac and Windows (excluding WSL2) machines, place the generated units on the remote system. Moreover, make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"XDG_RUNTIME_DIR")," environment variable is set. If unset, set it via ",(0,r.kt)("inlineCode",{parentName:"p"},"export XDG_RUNTIME_DIR=/run/user/$(id -u)"),".","_")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note: The generated ",(0,r.kt)("inlineCode",{parentName:"p"},"podman run")," command contains an ",(0,r.kt)("inlineCode",{parentName:"p"},"--sdnotify")," option with the value taken from the container.\nIf the container does not have any explicitly set value or the value is set to ",(0,r.kt)("strong",{parentName:"p"},"ignore"),", the value ",(0,r.kt)("strong",{parentName:"p"},"conmon")," is used.\nThe reason for overriding the default value ",(0,r.kt)("strong",{parentName:"p"},"container")," is that almost no container workloads send notify messages.\nSystemd would wait for a ready message that never comes, if the value ",(0,r.kt)("strong",{parentName:"p"},"container")," is used for a container\nthat does not send notify messages. The use of the default value might have been unintentional by the user,\ntherefore the overridden default value.","_"))),(0,r.kt)("h3",{id:"kubernetes-integration"},"Kubernetes Integration"),(0,r.kt)("p",null,"A Kubernetes YAML can be executed in systemd via the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-kube@.service")," systemd template. The template's argument is the path to the YAML file. Given a ",(0,r.kt)("inlineCode",{parentName:"p"},"workload.yaml")," file in the home directory, it can be executed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ escaped=$(systemd-escape ~/workload.yaml)\n$ systemctl --user start podman-kube@$escaped.service\n$ systemctl --user is-active podman-kube@$escaped.service\nactive\n")),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--afterdependency_name"},(0,r.kt)("strong",{parentName:"h4"},"--after"),"=",(0,r.kt)("em",{parentName:"h4"},"dependency_name")),(0,r.kt)("p",null,"Add the systemd unit after (",(0,r.kt)("inlineCode",{parentName:"p"},"After="),") option, that ordering dependencies between the list of dependencies and this service. This option may be specified more than once."),(0,r.kt)("p",null,"User-defined dependencies will be appended to the generated unit file, but any existing options such as needed or defined by default (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"online.target"),") will ",(0,r.kt)("strong",{parentName:"p"},"not")," be removed or overridden."),(0,r.kt)("h4",{id:"--container-prefixprefix"},(0,r.kt)("strong",{parentName:"h4"},"--container-prefix"),"=",(0,r.kt)("em",{parentName:"h4"},"prefix")),(0,r.kt)("p",null,"Set the systemd unit name prefix for containers. The default is ",(0,r.kt)("em",{parentName:"p"},"container"),"."),(0,r.kt)("h4",{id:"--env--eenv"},(0,r.kt)("strong",{parentName:"h4"},"--env"),", ",(0,r.kt)("strong",{parentName:"h4"},"-e"),"=",(0,r.kt)("em",{parentName:"h4"},"env")),(0,r.kt)("p",null,"Set environment variables to the systemd unit files."),(0,r.kt)("p",null,"If an environment variable is specified without a value, Podman will check the host environment for a value and set the variable only if it is set on the host. As a special case, if an environment variable ending in ",(0,r.kt)("strong",{parentName:"p"},"*")," is specified without a value, Podman will search the host environment for variables starting with the prefix and will add those variables to the systemd unit files."),(0,r.kt)("h4",{id:"--files--f"},(0,r.kt)("strong",{parentName:"h4"},"--files"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f")),(0,r.kt)("p",null,"Generate files instead of printing to stdout. The generated files are named {container,pod}-{ID,name}.service and will be placed in the current working directory."),(0,r.kt)("p",null,"Note: On a system with SELinux enabled, the generated files will inherit contexts from the current working directory. Depending on the SELinux setup, changes to the generated files using ",(0,r.kt)("inlineCode",{parentName:"p"},"restorecon"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chcon"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"semanage")," may be required to allow systemd to access these files. Alternatively, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-Z")," option when running ",(0,r.kt)("inlineCode",{parentName:"p"},"mv")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cp"),"."),(0,r.kt)("h4",{id:"--formatformat"},(0,r.kt)("strong",{parentName:"h4"},"--format"),"=",(0,r.kt)("em",{parentName:"h4"},"format")),(0,r.kt)("p",null,"Print the created units in specified format (json). If ",(0,r.kt)("inlineCode",{parentName:"p"},"--files")," is specified the paths to the created files will be printed instead of the unit content."),(0,r.kt)("h4",{id:"--name--n"},(0,r.kt)("strong",{parentName:"h4"},"--name"),", ",(0,r.kt)("strong",{parentName:"h4"},"-n")),(0,r.kt)("p",null,"Use the name of the container for the start, stop, and description in the unit file"),(0,r.kt)("h4",{id:"--new"},(0,r.kt)("strong",{parentName:"h4"},"--new")),(0,r.kt)("p",null,"Using this flag will yield unit files that do not expect containers and pods to exist. Instead, new containers and pods are created based on their configuration files. The unit files are created best effort and may need to be further edited; please review the generated files carefully before using them in production."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"--new")," only works on containers and pods created directly via Podman (i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"podman [container] {create,run}")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"podman pod create"),"). It does not work on containers or pods created via the REST API or via ",(0,r.kt)("inlineCode",{parentName:"p"},"podman kube play"),". For ",(0,r.kt)("inlineCode",{parentName:"p"},"podman kube play"),", please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-kube@.service")," systemd template instead."),(0,r.kt)("h4",{id:"--no-header"},(0,r.kt)("strong",{parentName:"h4"},"--no-header")),(0,r.kt)("p",null,"Do not generate the header including meta data such as the Podman version and the timestamp."),(0,r.kt)("h4",{id:"--pod-prefixprefix"},(0,r.kt)("strong",{parentName:"h4"},"--pod-prefix"),"=",(0,r.kt)("em",{parentName:"h4"},"prefix")),(0,r.kt)("p",null,"Set the systemd unit name prefix for pods. The default is ",(0,r.kt)("em",{parentName:"p"},"pod"),"."),(0,r.kt)("h4",{id:"--requiresdependency_name"},(0,r.kt)("strong",{parentName:"h4"},"--requires"),"=",(0,r.kt)("em",{parentName:"h4"},"dependency_name")),(0,r.kt)("p",null,"Set the systemd unit requires (",(0,r.kt)("inlineCode",{parentName:"p"},"Requires="),") option. Similar to wants, but declares a stronger requirement dependency."),(0,r.kt)("h4",{id:"--restart-policypolicy"},(0,r.kt)("strong",{parentName:"h4"},"--restart-policy"),"=",(0,r.kt)("em",{parentName:"h4"},"policy")),(0,r.kt)("p",null,'Set the systemd restart policy. The restart-policy must be one of: "no", "on-success", "on-failure", "on-abnormal",\n"on-watchdog", "on-abort", or "always". The default policy is ',(0,r.kt)("em",{parentName:"p"},"on-failure")," unless the container was created with a custom restart policy."),(0,r.kt)("p",null,"Note that generating a unit without ",(0,r.kt)("inlineCode",{parentName:"p"},"--new")," on a container with a custom restart policy can lead to issues on shutdown; systemd will attempt to stop the unit while Podman tries to restart it. It is recommended to to create the container without ",(0,r.kt)("inlineCode",{parentName:"p"},"--restart")," and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--restart-policy")," option instead when generating the unit file."),(0,r.kt)("h4",{id:"--restart-sectime"},(0,r.kt)("strong",{parentName:"h4"},"--restart-sec"),"=",(0,r.kt)("em",{parentName:"h4"},"time")),(0,r.kt)("p",null,"Set the systemd service restartsec value. Configures the time to sleep before restarting a service (as configured with restart-policy).\nTakes a value in seconds."),(0,r.kt)("h4",{id:"--separatorseparator"},(0,r.kt)("strong",{parentName:"h4"},"--separator"),"=",(0,r.kt)("em",{parentName:"h4"},"separator")),(0,r.kt)("p",null,"Set the systemd unit name separator between the name/id of a container/pod and the prefix. The default is ",(0,r.kt)("em",{parentName:"p"},"-"),"."),(0,r.kt)("h4",{id:"--start-timeoutvalue"},(0,r.kt)("strong",{parentName:"h4"},"--start-timeout"),"=",(0,r.kt)("em",{parentName:"h4"},"value")),(0,r.kt)("p",null,"Override the default start timeout for the container with the given value in seconds."),(0,r.kt)("h4",{id:"--stop-timeoutvalue"},(0,r.kt)("strong",{parentName:"h4"},"--stop-timeout"),"=",(0,r.kt)("em",{parentName:"h4"},"value")),(0,r.kt)("p",null,"Override the default stop timeout for the container with the given value in seconds."),(0,r.kt)("h4",{id:"--template"},(0,r.kt)("strong",{parentName:"h4"},"--template")),(0,r.kt)("p",null,"Add template specifiers to run multiple services from the systemd unit file."),(0,r.kt)("p",null,"Note that if ",(0,r.kt)("inlineCode",{parentName:"p"},"--new")," was not set to true, it is set to true by default. However, if ",(0,r.kt)("inlineCode",{parentName:"p"},"--new")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," explicitly the command will fail."),(0,r.kt)("h4",{id:"--wantsdependency_name"},(0,r.kt)("strong",{parentName:"h4"},"--wants"),"=",(0,r.kt)("em",{parentName:"h4"},"dependency_name")),(0,r.kt)("p",null,"Add the systemd unit wants (",(0,r.kt)("inlineCode",{parentName:"p"},"Wants="),") option, that this service is (weak) dependent on. This option may be specified more than once. This option does not influence the order in which services are started or stopped."),(0,r.kt)("p",null,"User-defined dependencies will be appended to the generated unit file, but any existing options such as needed or defined by default (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"online.target"),") will ",(0,r.kt)("strong",{parentName:"p"},"not")," be removed or overridden."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("h3",{id:"generate-and-print-a-systemd-unit-file-for-a-container"},"Generate and print a systemd unit file for a container"),(0,r.kt)("p",null,"Generate a systemd unit file for a container running nginx with an ",(0,r.kt)("em",{parentName:"p"},"always")," restart policy and 1-second timeout to stdout. Note that the ",(0,r.kt)("strong",{parentName:"p"},"RequiresMountsFor")," option in the ",(0,r.kt)("strong",{parentName:"p"},"Unit")," section ensures that the container storage for both the GraphRoot and the RunRoot are mounted prior to starting the service. For systems with container storage on disks like iSCSI or other remote block protocols, this ensures that Podman is not executed prior to any necessary storage operations coming online."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman create --name nginx nginx:latest\n$ podman generate systemd --restart-policy=always -t 1 nginx\n# container-de1e3223b1b888bc02d0962dd6cb5855eb00734061013ffdd3479d225abacdc6.service\n# autogenerated by Podman 1.8.0\n# Wed Mar 09 09:46:45 CEST 2020\n\n[Unit]\nDescription=Podman container-de1e3223b1b888bc02d0962dd6cb5855eb00734061013ffdd3479d225abacdc6.service\nDocumentation=man:podman-generate-systemd(1)\nWants=network-online.target\nAfter=network-online.target\nRequiresMountsFor=/var/run/container/storage\n\n[Service]\nRestart=always\nExecStart=/usr/bin/podman start de1e3223b1b888bc02d0962dd6cb5855eb00734061013ffdd3479d225abacdc6\nExecStop=/usr/bin/podman stop \\\n        -t 1 de1e3223b1b888bc02d0962dd6cb5855eb00734061013ffdd3479d225abacdc6\nKillMode=none\nType=forking\nPIDFile=/run/user/1000/overlay-containers/de1e3223b1b888bc02d0962dd6cb5855eb00734061013ffdd3479d225abacdc6/userdata/conmon.pid\n\n[Install]\nWantedBy=default.target\n")),(0,r.kt)("h3",{id:"generate-systemd-unit-file-for-a-container-with---new-flag"},"Generate systemd unit file for a container with ",(0,r.kt)("inlineCode",{parentName:"h3"},"--new")," flag"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--new")," flag generates systemd unit files that create and remove containers at service start and stop commands (see ExecStartPre and ExecStopPost service actions). Such unit files are not tied to a single machine and can easily be shared and used on other machines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo podman generate systemd --new --files --name bb310a0780ae\n# container-busy_moser.service\n# autogenerated by Podman 1.8.3\n# Fri Apr  3 09:40:47 EDT 2020\n\n[Unit]\nDescription=Podman container-busy_moser.service\nDocumentation=man:podman-generate-systemd(1)\nWants=network-online.target\nAfter=network-online.target\nRequiresMountsFor=/var/run/container/storage\n\n[Service]\nEnvironment=PODMAN_SYSTEMD_UNIT=%n\nRestart=on-failure\nExecStartPre=/bin/rm -f %t/%n-pid %t/%n-cid\nExecStart=/usr/local/bin/podman run \\\n        --conmon-pidfile %t/%n-pid \\\n    --cidfile %t/%n-cid \\\n    --cgroups=no-conmon \\\n    -d \\\n    -dit alpine\nExecStop=/usr/local/bin/podman stop \\\n        --ignore \\\n        --cidfile %t/%n-cid -t 10\nExecStopPost=/usr/local/bin/podman rm \\\n        --ignore \\\n        -f \\\n    --cidfile %t/%n-cid\nPIDFile=%t/%n-pid\nKillMode=none\nType=forking\n\n[Install]\nWantedBy=default.target\n")),(0,r.kt)("h3",{id:"generate-systemd-unit-files-for-a-pod-with-two-simple-alpine-containers"},"Generate systemd unit files for a pod with two simple alpine containers"),(0,r.kt)("p",null,"Note ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl")," should only be used on the pod unit and one should not start or stop containers individually via ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl"),", as they are managed by the pod service along with the internal infra-container."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl status")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"journalctl")," to examine container or pod unit files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman pod create --name systemd-pod\n$ podman create --pod systemd-pod alpine top\n$ podman create --pod systemd-pod alpine top\n$ podman generate systemd --files --name systemd-pod\n/home/user/pod-systemd-pod.service\n/home/user/container-amazing_chandrasekhar.service\n/home/user/container-jolly_shtern.service\n$ cat pod-systemd-pod.service\n# pod-systemd-pod.service\n# autogenerated by Podman 1.8.0\n# Wed Mar 09 09:52:37 CEST 2020\n\n[Unit]\nDescription=Podman pod-systemd-pod.service\nDocumentation=man:podman-generate-systemd(1)\nRequires=container-amazing_chandrasekhar.service container-jolly_shtern.service\nBefore=container-amazing_chandrasekhar.service container-jolly_shtern.service\nWants=network-online.target\nAfter=network-online.target\nRequiresMountsFor=/var/run/container/storage\n\n[Service]\nRestart=on-failure\nExecStart=/usr/bin/podman start 77a818221650-infra\nExecStop=/usr/bin/podman stop \\\n        -t 10 77a818221650-infra\nKillMode=none\nType=forking\nPIDFile=/run/user/1000/overlay-containers/ccfd5c71a088768774ca7bd05888d55cc287698dde06f475c8b02f696a25adcd/userdata/conmon.pid\n\n[Install]\nWantedBy=default.target\n")),(0,r.kt)("h3",{id:"installation-of-generated-systemd-unit-files"},"Installation of generated systemd unit files."),(0,r.kt)("p",null,"Podman-generated unit files include an ",(0,r.kt)("inlineCode",{parentName:"p"},"[Install]")," section, which carries installation information for the unit. It is used by the enable and disable commands of systemctl(1) during installation."),(0,r.kt)("p",null,"Once the systemd unit file is generated, install it to ",(0,r.kt)("em",{parentName:"p"},"/etc/systemd/system")," to be run by the root user or to ",(0,r.kt)("em",{parentName:"p"},"$HOME/.config/systemd/user")," for installing it as a non-root user. Enable the copied unit file or files using ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl enable"),"."),(0,r.kt)("p",null,"Note: Copying unit files to ",(0,r.kt)("em",{parentName:"p"},"/etc/systemd/system")," and enabling it marks the unit file to be automatically started at boot. And similarly, copying a unit file to ",(0,r.kt)("em",{parentName:"p"},"$HOME/.config/systemd/user")," and enabling it marks the unit file to be automatically started on user login."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Generated systemd files.\n$ podman pod create --name systemd-pod\n$ podman create --pod systemd-pod alpine top\n$ podman generate systemd --files --name systemd-pod\n\n# Copy all the generated files.\n\n$ sudo cp pod-systemd-pod.service container-great_payne.service /etc/systemd/system\n$ systemctl enable pod-systemd-pod.service\nCreated symlink /etc/systemd/system/multi-user.target.wants/pod-systemd-pod.service \u2192 /etc/systemd/system/pod-systemd-pod.service.\nCreated symlink /etc/systemd/system/default.target.wants/pod-systemd-pod.service \u2192 /etc/systemd/system/pod-systemd-pod.service.\n$ systemctl is-enabled pod-systemd-pod.service\nenabled\n")),(0,r.kt)("p",null,"To run the user services placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.config/systemd/user")," on first login of that user, enable the service with --user flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ systemctl --user enable <.service>\n")),(0,r.kt)("p",null,"The systemd user instance is killed after the last session for the user is closed. The systemd user instance can be started at boot and kept running even after the user logs out by enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"lingering")," using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ loginctl enable-linger <username>\n")),(0,r.kt)("h3",{id:"use-systemctl-to-perform-operations-on-generated-installed-unit-files"},"Use ",(0,r.kt)("inlineCode",{parentName:"h3"},"systemctl")," to perform operations on generated installed unit files."),(0,r.kt)("p",null,"Create and enable systemd unit files for a pod using the above examples as reference and use ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl")," to perform operations."),(0,r.kt)("p",null,"Since systemctl defaults to using the root user, all the changes using the systemctl can be seen by appending sudo to the podman cli commands. To perform ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl")," actions as a non-root user use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--user")," flag when interacting with ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl"),"."),(0,r.kt)("p",null,"Note: If the previously created containers or pods are using shared resources, such as ports, make sure to remove them before starting the generated systemd units."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ systemctl --user start pod-systemd-pod.service\n$ podman pod ps\nPOD ID         NAME          STATUS    CREATED          # OF CONTAINERS   INFRA ID\n0815c7b8e7f5   systemd-pod   Running   29 minutes ago   2                 6c5d116f4bbe\n$ sudo podman ps # 0 Number of pods on root.\nCONTAINER ID  IMAGE  COMMAND  CREATED  STATUS  PORTS  NAMES\n$ systemctl stop pod-systemd-pod.service\n$ podman pod ps\nPOD ID         NAME          STATUS   CREATED          # OF CONTAINERS   INFRA ID\n272d2813c798   systemd-pod   Exited   29 minutes ago   2                 6c5d116f4bbe\n")),(0,r.kt)("p",null,"Create a simple alpine container and generate the systemd unit file with ",(0,r.kt)("inlineCode",{parentName:"p"},"--new")," flag.\nEnable the service and control operations using the systemctl commands."),(0,r.kt)("p",null,"Note: When starting the container using ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start"),' rather than altering the already running container it spins up a "new" container with similar configuration.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Enable the service.\n\n$ sudo podman ps -a\nCONTAINER ID  IMAGE                            COMMAND  CREATED        STATUS     PORTS  NAMES\nbb310a0780ae  docker.io/library/alpine:latest  /bin/sh  2 minutes ago  Created           busy_moser\n$ sudo systemctl start container-busy_moser.service\n$ sudo podman ps -a\nCONTAINER ID  IMAGE                            COMMAND  CREATED        STATUS        PORTS      NAMES\n772df2f8cf3b  docker.io/library/alpine:latest  /bin/sh  1 second ago   Up 1 second              distracted_albattani\nbb310a0780ae  docker.io/library/alpine:latest  /bin/sh  3 minutes ago  Created                  busy_moser\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/podman"},"podman(2)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/commands/podman-container/"},"podman-container(1)")),", ",(0,r.kt)("strong",{parentName:"p"},"systemctl(1)"),", ",(0,r.kt)("strong",{parentName:"p"},"systemd.unit(5)"),", ",(0,r.kt)("strong",{parentName:"p"},"systemd.service(5)"),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/containers/conmon/blob/main/docs/conmon.8.md"},"conmon(8)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"April 2020, Updated details and added use case to use generated .service files as root and non-root, by Sujil Shah (sushah at redhat dot com)"),(0,r.kt)("p",null,"August 2019, Updated with pod support by Valentin Rothberg (rothberg at redhat dot com)"),(0,r.kt)("p",null,"April 2019, Originally compiled by Brent Baude (bbaude at redhat dot com)"))}c.isMDXComponent=!0}}]);