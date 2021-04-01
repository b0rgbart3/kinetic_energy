const start = 
    function() {
         var __rt=srequire('streamline/lib/callbacks/runtime').runtime(__filename, false),
         __func=__rt.__func,
         __cb=__rt.__cb; 

        function main(wait) { 
            var version, box, sphere, cylinder, pyramid, cone, helix, ellipsoid, 
            ring, arrow, graph, display, vector, _$rapyd$_Temp, _$rapyd$_print, 
            arange, scene, k, m, l_eq, r_0, p_0, b, v_max, omega, fixed_end_of_spring, 
            momentum_graph, momentum_curve, position_graph, position_curve, 
            phase_space_graph, psp_curve, E_graph, E_curve, T_graph, T_curve, 
            U_graph, U_curve, spring, mass, deltat, e, F_spring, v_air, 
            F_drag, F_net, p, r, T, U, E, t; 
            
            var __frame = { name: "main", line: 1 }; 

            return __func(wait, this, arguments, main, 0, __frame, function __$main() {
    
                version = ["2.1","glowscript",];
                Array.prototype["+"] = function(r) { return this.concat(r); };
                window.__GSlang = "vpython";
                box = vp_box;
                sphere = vp_sphere;
                cylinder = vp_cylinder;
                pyramid = vp_pyramid;
                cone = vp_cone;
                helix = vp_helix;
                ellipsoid = vp_ellipsoid;
                ring = vp_ring;
                arrow = vp_arrow;
                graph = vp_graph;
                display = canvas;
                vector = vec;
                _$rapyd$_Temp = 0;
                _$rapyd$_print = GSprint;
                arange = range;
                scene = canvas();
                k = 15;
                m = 0.5;
                l_eq = 10;           
                r_0 = vector(15, 15, 0);
                p_0 = vector(20, 10, 15);
                b = 0.1;
                v_max = vector(10, 0, 0);
                omega = sqrt(k["/"](m));
                scene.width = 800;
                scene.height = 800;
                fixed_end_of_spring = sphere({ pos: vector(0, 0, 0), size: 1["*"](vector(1, 1, 1)), color: color.yellow });
                momentum_graph = graph({ title: "Momentum vs Time" });
                momentum_curve = gcurve({ color: color.green });
                position_graph = graph({ title: "Position vs Time" });
                position_curve = gcurve({ color: color.blue });
                phase_space_graph = graph({ title: "Phase Space Portrait (Momentum vs Position)" });
                psp_curve = gcurve({ color: color.red, dot: true });
                E_graph = graph({ title: "Total Energy vs Time" });
                E_curve = gcurve({ color: color.black });
                T_graph = graph({ title: "Kinetic Energy vs Time" });
                T_curve = gcurve({ color: color.cyan });
                U_graph = graph({ title: "Potential Energy vs Time" });
                U_curve = gcurve({ color: color.magenta });
                r = r_0;
                p = p_0;
                t = 0;
                spring = helix({ pos: vector(0, 0, 0), radius: 1, thickness: 0.2, color: color.orange, axis: r });
                mass = sphere({ pos: r, size: 4["*"](vector(1, 1, 1)), color: color.cyan });
                deltat = 0.01;
                
                return (function ___(__break) { 
                    var __more; 
                    var __loop = __cb(wait, __frame, 0, 0, 
                        
                        function __$main() { 
                            __more = false;
                            var __1 = (t < 50); 
                            
                            if (__1) {
                     
                            return rate(500, __cb(wait, __frame, 82, 8, function __$main() {
                           
                                e = l_eq["*"](hat(r));
                                F_spring = k["-u"]()["*"](r["-"](e));
                                v_air = v_max["*"](sin(omega["*"](t)));
                                F_drag = b["-u"]()["*"](p["/"](m)["-"](v_air));
                                F_net = F_spring["+"](F_drag);
                                p = p["+"](F_net["*"](deltat));
                                r = r["+"](p["/"](m)["*"](deltat));
                                T = dot(p, p)["/"](2["*"](m));
                                U = k["*"](dot(r["-"](e), r["-"](e)))["/"](2);
                                E = T["+"](U);
                                mass.pos = r;
                                spring.axis = r;
                                momentum_curve.plot({ pos: [t,p.x,] });
                                position_curve.plot({ pos: [t,r.x,] });
                                psp_curve.plot({ pos: [r.x,p.x,] });
                                E_curve.plot({ pos: [t,E,] });
                                T_curve.plot({ pos: [t,T,] });
                                U_curve.plot({ pos: [t,U,] });
                                t = t["+"](deltat); 

                                while (__more) 
                                    { 
                                        __loop(); 
                                    }
                                    __more = true; 
                                }, true)); 
                            } 
                            else 
                            { 
                                __break(); 
                            }; }); 
                            
                            do { __loop(); } 
                            
                            while (__more)
                            __more = true; })
                            (function __$main() { 
                                
                            
                            }); 
            });
        };
    
    window.__context = { glowscript_container: $("#glowscript") }; 
    main(__func);

}


window.onload = (event) => {

    start();
}

