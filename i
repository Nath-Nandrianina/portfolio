[33mcommit e89b739810e5048be1de60d328ca8530b196d50c[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: nathanael <nath.ramanamahefa@gmail.com>
Date:   Fri May 19 05:31:49 2023 +0300

    other rectification

[1mdiff --git a/src/components/project/Project.js b/src/components/project/Project.js[m
[1mindex d3c63e1..3b21a7e 100644[m
[1m--- a/src/components/project/Project.js[m
[1m+++ b/src/components/project/Project.js[m
[36m@@ -47,7 +47,7 @@[m [mconst Project = (props) => {[m
                         pathname: `/project/${item.title.replace(/\s+/g, "").trim()}`,[m
                         }}[m
                     >[m
[31m-                        <img src={item.image}  alt={item.title} />[m
[32m+[m[32m                        <img src={process.env.PUBLIC_URL +`${item.image}`}  alt={item.title} />[m
                     </Link>               [m
                     </div>   [m
                 </div>   [m
