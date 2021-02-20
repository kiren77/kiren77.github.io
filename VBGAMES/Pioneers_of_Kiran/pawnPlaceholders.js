/* what we know

roads :
- have at least 2 adjacent roads (coastal 2-3)
- have at most 4 adjacent roads (inland)
- always rest between two roads from which they bear
their name
- can only be built next to existing nodes or roads.
- provide no intrinsic value unless at least 5 contiguous 
sections are placed by a player, (2VP)
without being interrupted by pieces of another player



nodes (set and cit):
- have between 2 and 3 adjacent roads
- (regardless of which player) 
may not be placed within (the equivalent distance of)
2 roads of any other node
- need to act according to following:
events  

nomenclature:      
roadDaigu : / : sameletter/uneven to sameletter/even ex:       a3a4
roadgrav : \ : sameletter/even to sameletter/uneven ex:       c8c9

roadvert : | : nextletter/number to previousletter/number 




\   /b5b6
        | c6b5 (when clicked)
/\

*/

const allPawns = [
nodeAhi =   {
A2hi : document.getElementsByClassName("nodeA2"),      
A4hi : document.getElementsByClassName("nodeA4"),      
A6hi : document.getElementsByClassName("nodeA6"),
},

nodeAlo = {
A1lo : document.getElementsByClassName("nodeA1"),      
A3lo : document.getElementsByClassName("nodeA3"),      
A5lo : document.getElementsByClassName("nodeA5"),      
A7lo : document.getElementsByClassName("nodeA7"),
},

roadAgrav = {   
a2a3 : document.getElementById("a2a3"),                
a4a5 : document.getElementById("a4a6"),                  
a6a7 : document.getElementById("a6a7"),
},

roadAaigu = {    
a1a2 : document.getElementById("a1a2"),                
a3a4 : document.getElementById("a3a4"),      
a5a6 : document.getElementById("a5a6"),
},

roadAvert = {    
b2a1 : document.getElementById("b2a1"),                
b4a3 : document.getElementById("b4a3"),      
b6a5 : document.getElementById("b6a5"),      
b8a7 : document.getElementById("b8a7"),
},

nodeBhi = {      
b2hi : document.getElementsByClassName("nodeB2"),      
b4hi : document.getElementsByClassName("nodeB4"),      
b6hi : document.getElementsByClassName("nodeB6"),      
b8hi : document.getElementsByClassName("nodeB8"),
},

nodeBlo = {      
b1lo : document.getElementsByClassName("nodeB1"),      
B3lo : document.getElementsByClassName("nodeB3"),      
B5lo : document.getElementsByClassName("nodeB5"),      
B7lo : document.getElementsByClassName("nodeB7"),      
B9lo : document.getElementsByClassName("nodeB9"),
},

roadBgrav = {    
b2b3 : document.getElementById("b2b3"),                
b4b5 : document.getElementById("b4b5"),      
b6b7 : document.getElementById("b6b7"),      
b8b9 : document.getElementById("b8b9"),
},

roadBaigu = {    
b1b2 : document.getElementById("b1b2"),                
b3b4 : document.getElementById("b3b4"),      
b5b6 : document.getElementById("b5b6"),      
b7b8 : document.getElementById("b7b8"),
},

roadBvert = {    
c2b1 : document.getElementById("c2b1"),                
c4b3 : document.getElementById("c4b3"),      
c6b5 : document.getElementById("c6b5"),      
c8b7 : document.getElementById("c8b7"),      
c10b9  : document.getElementById("c10b9"),
},

nodeChi = {      
C2hi : document.getElementsByClassName("nodeC2"),      
C4hi : document.getElementsByClassName("nodeC4"),      
C6hi : document.getElementsByClassName("nodeC6"),      
C8hi : document.getElementsByClassName("nodeC8"),      
C10hi : document.getElementsByClassName("nodeC10"),
},

nodeClo = {      
C1lo : document.getElementsByClassName("nodeC1"),      
C3lo : document.getElementsByClassName("nodeC3"),      
C5lo : document.getElementsByClassName("nodeC5"),      
C7lo : document.getElementsByClassName("nodeC7"),      
C9lo : document.getElementsByClassName("nodeC9"),    
C11lo : document.getElementsByClassName("nodeC11"),
},

roadCgrav = {    
c2c3 : document.getElementById("c2c3"),                
c4c5 : document.getElementById("c4c5"),      
c6c7 : document.getElementById("c6c7"),      
c8c9 : document.getElementById("c8c9"),      
c10c11 : document.getElementById("c10c11"),
},

roadCaigu = {    
c1c2 : document.getElementById("c1c2"),                
c3c4 : document.getElementById("c3c4"),      
c5c6 : document.getElementById("c5c6"),      
c7c8 : document.getElementById("c7c8"),      
c9c10  : document.getElementById("c9c10"),
},  

roadCvert = {    
d1c1 : document.getElementById("d1c1"),                
d3c3 : document.getElementById("d3c3"),      
d5c5   : document.getElementById("d5c5"),    
d7c7 : document.getElementById("d7c7"),      
d9c9 : document.getElementById("d9c9"),       
d11c11 : document.getElementById("d11c11"),
},

/* D and lower from even to uneven and vice versa */
nodeDhi = {      D1hi : document.getElementsByClassName("nodeD1"),      
D3hi : document.getElementsByClassName("nodeD3"),      
D5hi : document.getElementsByClassName("nodeD5"),      
D7hi : document.getElementsByClassName("nodeD7"),      
D9hi : document.getElementsByClassName("nodeD9"),    
D11hi : document.getElementsByClassName("nodeD11"),
},

nodeDlo = {      D2hi : document.getElementsByClassName("nodeD2"),      
D3lo : document.getElementsByClassName("nodeD3"),      
D5lo : document.getElementsByClassName("nodeD5"),      
D7lo : document.getElementsByClassName("nodeD7"),      
D9lo : document.getElementsByClassName("nodeD9"),    
D10lo : document.getElementsByClassName("nodeD10"),
},

roadDaigu = {    
d2d3 : document.getElementById("d2d3"),      
d4d5 : document.getElementById("d4d5"),       
d6d7 : document.getElementById("d6d7"),      
d8d9 : document.getElementById("d8d9"),       
d10d11 : document.getElementById("d10d11"),
},

roadDgrav = {    
d1d2 : document.getElementById("d1d2"),      
d3d4 : document.getElementById("d3d4"),      
d5d6 : document.getElementById("d5d6"),      
d7d8 : document.getElementById("d7d8"),      
d9d10  : document.getElementById("d9d10"),  
}, 

roadDvert = {    
e1d2 : document.getElementById("e1d2"),      
e3d4 : document.getElementById("e3d4"),      
e5d6 : document.getElementById("e5d6"),      
e7d8 : document.getElementById("e7d8"),      
e9d10  : document.getElementById("e9d10"),
},  

nodeEhi = {      
E1Hi : document.getElementsByClassName("nodeE1"),      
E3hi : document.getElementsByClassName("nodeE3"),      
E5hi : document.getElementsByClassName("nodeE5"),      
E7hi : document.getElementsByClassName("nodeE7"),      
E9hi : document.getElementsByClassName("nodeE9"),  
},    

nodeElo = {      E2lo : document.getElementsByClassName("nodeE2"),      
E4lo : document.getElementsByClassName("nodeE4"),      
E6lo : document.getElementsByClassName("nodeE6"),      
E8lo : document.getElementsByClassName("nodeE8"),      
},

roadEgrav = {    
e2e3 : document.getElementById("e2e3"),      
e4e5 : document.getElementById("e4e5"),      
e6e7 : document.getElementById("e6e7"),      
e8e9 : document.getElementById("e8e9"),     
},

roadEaigu = {    
e1e2 : document.getElementById("e1e2"),      
e3e4 : document.getElementById("e3e4"),      
e5e6 : document.getElementById("e5e6"),      
e7e8 : document.getElementById("e7e8"),
},   

roadEvert = {    
f1e2 : document.getElementById("f1e2"),      
f3e4 : document.getElementById("f3e4"),      
f5e6 : document.getElementById("f5e6"),      
f7e8 : document.getElementById("f7e8"),
},     

nodeFhi = {      
F2Hi : document.getElementsByClassName("nodeF2"),      
F4hi : document.getElementsByClassName("nodeF4"),      
F6hi : document.getElementsByClassName("nodeF6"),    
F1lo : document.getElementsByClassName("nodeF1"),      
F3lo : document.getElementsByClassName("nodeF3"),      
F5lo : document.getElementsByClassName("nodeF5"),      
F7lo : document.getElementsByClassName("nodeF7"),
},

roadFgrav = {    
f2f3 : document.getElementById("f2f3"),      
f4f5 : document.getElementById("f4f5"),      
f6f7 : document.getElementById("f6f7"),      
f1f2 : document.getElementById("f1f2"),      
f3f4 : document.getElementById("f3f4"),      
f5f6 : document.getElementById("f5f6"),   
}   
]

console.log(allPawns);