var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  The purpose of this text is to take advantage of the overlap between introductory courses in group theory and modern geometry. Group theory typically features geometric content in the form of symmetry groups, and Kleinian geometry relies on the group structure of congruence transformations. Learning the two subjects together enhances both.   This text is two textbooks in one: an introduction to group theory, and an introduction to modern geometries using the Kleinian paradigm. The book can be used for a combined one-semester course in both subjects, or, through supplementary projects, it can be used for a one-semester introduction to group theory or a one-semester introduction to modern geometries.  The chapter on groups develops the basic vocabulary and theory of groups and homomorphisms, culminating with group actions. The chapter on geometry makes use of group symmetries to build the basic theory of Möbius, hyperbolic, elliptic, and projective geometries. Throughout, a design theme is the use of a small but carefully chosen collection of tools, beginning with the algebra and geometry of complex numbers and quaternions, and using a minimum of machinery from analysis and linear algebra, to develop useful and nontrivial results for group theory and geometry in a way that prefers using conceptual tools to brute computation.  Many results (for example, Lagrange's Theorem for groups and area formulas in hyperbolic and elliptic geometries) are developed in carefully structured exercises, rather than in the reading. This reflects a deliberate emphasis on active engagement with the material. The intention is for students to read, to reason, and to develop results on their own, as a means of achieving mastery and fostering analytic skills.  Note on reading exercises versus end-of-section exercises: In the narrative for each section, exercises labeled Checkpoint are meant to be reading exercises, that is, part of the process of active reading. Working through end-of-section exercises is meant to take place after reading and working the reading exercises. The recommended order for class discussion is: (1) questions about the reading; (2) solutions to reading exercises; and (3) solutions to end-of-section exercises.  The text assumes prerequisite courses in calculus, linear algebra, and experience with proof writing.  Here are sample schedules for three possible courses in a 15-week semester. Variations are supported by Additional Exercises sections in Chapters 2 and 3, and a Further Topics section at the end of the text.    Combined Course on Groups and Geometries    Ch. 1 Preliminaries  1.1 1.4, Ch 1 exam  3 weeks   Ch. 2 Groups  2.1 2.5, Ch 2 exam  6 weeks   Ch. 3 Geometries  3.1 3.5, Ch 3 exam  6 weeks        Stand-alone Course on Group Theory    Ch. 1 Preliminaries  1.1,1.4  1.5 weeks   Ch. 2 Groups  2.1 2.6, 2 weeks each  12 weeks   Final Project   1.5 weeks        Stand-alone Course on Modern Geometries    Ch. 1 Preliminaries  1.2,1.3  1.5 weeks   Ch. 3 Geometries  3.1 3.6, 2 weeks each  12 weeks   Final Project   1.5 weeks      Many thanks to my readers and problem checkers! Joshua Miller, Dakota Johnson-Ortiz, Alex Heilman, Ashley Swogger, Jesse Arnold, Daniel Mannetta, Travis Martin, Tyler Hoover, Qinhao Jin, Tyler Pick, Adam Rilatt, Luke Bakalyar, Brandon Bauer, Jack Putnam, Penn Smith, Richard Hammack, Turner Hannon    Comments, discussion, error reports, and so on, are welcome.    "
},
{
  "id": "frontmatter-4-9-1",
  "level": "2",
  "url": "frontmatter-4.html#frontmatter-4-9-1",
  "type": "Table",
  "number": "0.0.1",
  "title": "Combined Course on Groups and Geometries",
  "body": " Combined Course on Groups and Geometries    Ch. 1 Preliminaries  1.1 1.4, Ch 1 exam  3 weeks   Ch. 2 Groups  2.1 2.5, Ch 2 exam  6 weeks   Ch. 3 Geometries  3.1 3.5, Ch 3 exam  6 weeks    "
},
{
  "id": "frontmatter-4-10-1",
  "level": "2",
  "url": "frontmatter-4.html#frontmatter-4-10-1",
  "type": "Table",
  "number": "0.0.2",
  "title": "Stand-alone Course on Group Theory",
  "body": " Stand-alone Course on Group Theory    Ch. 1 Preliminaries  1.1,1.4  1.5 weeks   Ch. 2 Groups  2.1 2.6, 2 weeks each  12 weeks   Final Project   1.5 weeks    "
},
{
  "id": "frontmatter-4-11-1",
  "level": "2",
  "url": "frontmatter-4.html#frontmatter-4-11-1",
  "type": "Table",
  "number": "0.0.3",
  "title": "Stand-alone Course on Modern Geometries",
  "body": " Stand-alone Course on Modern Geometries    Ch. 1 Preliminaries  1.2,1.3  1.5 weeks   Ch. 3 Geometries  3.1 3.6, 2 weeks each  12 weeks   Final Project   1.5 weeks    "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Author Biography",
  "number": "",
  "title": "About the author",
  "body": "About the author  David W. Lyons is a professor of mathematics at Lebanon Valley College in Annville, Pennsylvania, USA, where he has taught and conducted research since 2000. Lyons works in mathematical physics, leading a student-faculty research program in quantum information science since 2002. For more information, visit his academic website .  "
},
{
  "id": "complex_plane_section",
  "level": "1",
  "url": "complex_plane_section.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Complex Plane",
  "body": " The Complex Plane  The complex numbers were originally invented to solve problems in algebra. It was later recognized that the algebra of complex numbers provides an elegant set of tools for geometry in the plane. For an introduction (or for a review) of the basics of the algebra and geometry of the complex numbers, we refer the reader to the section entitled Complex Numbers in the author's text Not Just Calculus  . The remainder of this short section introduces material that will be useful later in this text.  Circles and Lines. Let be the circle in the complex plane with radius and with center . A point lies on if and only if the distance from to equals . In mathematical symbols, is the set of complex solutions for the following equation.   The real line in the complex plane is the set of solutions of the equation . More generally, let be a line that contains the point and makes an angle with the real axis (set if is parallel to the real axis). If , then is real, so . See . Conversely, if is real, then lies on . Multiplying by a positive constant , and setting and , we conclude that the line is the set of solutions to the following equation.    A line in the complex plane.     Solving quadratic equations Find all complex solutions of the following equations.       Circles and lines   For a real variable and a real constant , completing the square refers to rewriting the expression as follows. A complex version of completing the square for a complex variable and a complex constant is the following. Write a derivation to justify this. Then use completing the square to find the center and radius of the circle given by the equation .  Write an alternative proof for the general form for the equation of a line , as follows. Let , , . Find the equation of the line in terms of the real variables and real constants . Explain why it is necessary that .     Complex numbers as real matrices Let denote the set of matrices of the form with . Given a complex number with Cartesian form , let denote the matrix in . Conversely, given a matrix with top left entry and bottom left entry , let denote the complex number . It is clear that the mappings and are inverses to one another, and establish a one-to-one correspondence . Show that is closed under addition and multiplication. That is, suppose that are elements of . Show that and are also elements of .  Show that complex addition and multiplication are mirrored in . That is, show that     Significance of this exercise. Matrix algebra provides a framework for theory and applications in almost every area in mathematics. Using the one-to-one correspondence , it is possible to translate all of complex algebra in terms of matrix operations. We will use this same idea to define and prove the basic properties of quaternion algebra in , and we will use correspondences with matrix algebras to prove properties of geometric transformations in .    "
},
{
  "id": "lines_in_complex_plane_fig",
  "level": "2",
  "url": "complex_plane_section.html#lines_in_complex_plane_fig",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " A line in the complex plane.   "
},
{
  "id": "solvecomplexquadraticsexer",
  "level": "2",
  "url": "complex_plane_section.html#solvecomplexquadraticsexer",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "Solving quadratic equations.",
  "body": "Solving quadratic equations Find all complex solutions of the following equations.      "
},
{
  "id": "complexcircleslines",
  "level": "2",
  "url": "complex_plane_section.html#complexcircleslines",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "Circles and lines.",
  "body": "Circles and lines   For a real variable and a real constant , completing the square refers to rewriting the expression as follows. A complex version of completing the square for a complex variable and a complex constant is the following. Write a derivation to justify this. Then use completing the square to find the center and radius of the circle given by the equation .  Write an alternative proof for the general form for the equation of a line , as follows. Let , , . Find the equation of the line in terms of the real variables and real constants . Explain why it is necessary that .    "
},
{
  "id": "complexnosasrealmatalg",
  "level": "2",
  "url": "complex_plane_section.html#complexnosasrealmatalg",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "Complex numbers as <span class=\"process-math\">\\(2\\times 2\\)<\/span> real matrices.",
  "body": "Complex numbers as real matrices Let denote the set of matrices of the form with . Given a complex number with Cartesian form , let denote the matrix in . Conversely, given a matrix with top left entry and bottom left entry , let denote the complex number . It is clear that the mappings and are inverses to one another, and establish a one-to-one correspondence . Show that is closed under addition and multiplication. That is, suppose that are elements of . Show that and are also elements of .  Show that complex addition and multiplication are mirrored in . That is, show that     Significance of this exercise. Matrix algebra provides a framework for theory and applications in almost every area in mathematics. Using the one-to-one correspondence , it is possible to translate all of complex algebra in terms of matrix operations. We will use this same idea to define and prove the basic properties of quaternion algebra in , and we will use correspondences with matrix algebras to prove properties of geometric transformations in .  "
},
{
  "id": "quaternionsection",
  "level": "1",
  "url": "quaternionsection.html",
  "type": "Section",
  "number": "1.2",
  "title": "Quaternions",
  "body": " Quaternions   The quaternions, discovered by William Rowan Hamilton in 1843, were invented to capture the algebra of rotations of 3-dimensional real space, extending the way that the complex numbers capture the algebra of rotations of 2-dimensional real space.  Elements in the set of quaternions the quaternions are in one-to-one correspondence with points in 4-dimensional real space . We will write to denote that the quaternion corresponds to the 4-tuple of real numbers.   Cartesian form and pure quaternions  The quaternions are defined as follows. The expression is called the Cartesian form Cartesian form of a quaternion of the quaternion that corresponds to the vector in . A quaternion of the form is called a scalar quaternion scalar quaternion  quaternion or a real quaternion real quaternion quaternion. A quaternion of the form is called a pure quaternion pure quaternion quaternion or an imaginary quaternion imaginary quaternion quaternion. For a quaternion , we call the real quaternion the scalar part quaternion scalar part of a quaternion or real part quaternion real part of a quaternion of , and we call the quaternion the vector part quaternion vector part of a quaternion or the imaginary part quaternion imaginary part of a quaternion of . To reflect the natural correspondence of the pure quaternion with the vector in , we will write the space of pure quaternions  to denote the space of pure quaternions.   Correspondence with complex matrices  Analogous to the way that the complex numbers can be realized as the set of real matrices (see ), the quaternions can be realized by a set of complex matrices, as follows. Let denote the set of complex matrices of the form . Given a quaternion , let be the complex numbers and , and let denote the matrix in given by Conversely, given a matrix , with top left entry and top right entry , let denote the quaternion . It is clear that the mappings and are inverses to one another, and establish a one-to-one correspondence .  is closed under addition and multiplication  Let be elements of . Then the sum and the product are also elements of .    Prove .    Addition and multiplication  By virtue of , we can define addition and multiplication of quaternions as follows. Because matrix algebra has associative and distributive laws, these carry over to quaternions. Note that quaternion multiplication is not commutative! However, for any real quaternion , we have , so commutes with all matrices, and therefore commutes with all quaternions. To summarize, let be quaternions and let be a real quaternion. We have the following.   In practice, it is not necessary to convert quaternions to matrices in order to add and multiply. Quaternion addition and multiplication in Cartesian form is analogous to complex multiplication, using the following basic multiplication rules.   Verify and .   For and , we have Multiplication looks like this. If are pure quaternions, can be written more compactly in terms of the dot and cross products for vectors in .    Verify .    Conjugate, modulus, and polar form  The conjugate conjugate of a quaternion of a quaternion is , and the modulus modulus of a quaternion of is . The unit quaternions quaternion unit quaternions groups, list of the unit quaternions , denoted the unit quaternions , is the set of quaternions with modulus 1. The set of unit quaternions is in one-to-one correspondence with the 3-sphere . This is analogous to the set of norm 1 complex numbers that is in one-to-one correspondence with the 1-sphere . Analogous to complex numbers, a quaternion can be expressed in polar form polar form of a quaternion  where is a pure unit quaternion and is a real number.     Show that the following construction produces a polar form for a nonzero quaternion . Let . If , let , and let .  Fill in the remaining details on polar form for quaternions. What happens if ? What happens if ?  Are uniquely determined by ? If not, describe the possible choices for .     Continuing the analogy with complex numbers, we have the following, for all quaternions . .  Verify the three equations above.  Work in . Start by checking that , where denotes the conjugate transpose of a matrix. Alternatively, write in polar form and use .    Quaternions as rotations of  Let be a unit quaternion and let be a pure quaternion. Let denote the quaternion . It is easy to check that . From this we conclude that is a pure quaternion.  Explain how we conclude that is pure when is a unit quaternion and is a pure quaternion.   It is easy to see that is a linear map from the real vector space of unit quaternions to itself. That means that the following properties hold for all pure quaternions and all real scalars .   Show the details to prove that is linear.   We conclude with the main result of this section that shows how rotations of 3-dimensional real space are encoded in the algebra of quaternions.  Quaternions and rotations of  Let be a unit quaternion in polar form, and let be the linear transformation of the space of pure quaternions given by . The action of is a rotation by radians about the axis given by the unit vector .      Prove using the following outline. Let be a polar form for a unit quaternion . Show that .  Let be any pure unit quaternion orthogonal to , and let , so that the triple forms a right-handed coordinate system for . Show that (use equation ) and then explain how this proves the Proposition.     In deriving equation , you will obtain expressions and . Use equation to show that and . Show that the quaternion on the right side of has norm 1. Finally, use the fact that for real vectors that make an angle at the origin to determine the angle made by .   Show that the following hold for all .       "
},
{
  "id": "quaternionsection-3-2",
  "level": "2",
  "url": "quaternionsection.html#quaternionsection-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian form scalar real pure imaginary scalar part real part vector part imaginary part "
},
{
  "id": "quatmatalgprop",
  "level": "2",
  "url": "quaternionsection.html#quatmatalgprop",
  "type": "Proposition",
  "number": "1.2.1",
  "title": "<span class=\"process-math\">\\({\\mathcal M}_\\Quat\\)<\/span> is closed under addition and multiplication.",
  "body": "is closed under addition and multiplication  Let be elements of . Then the sum and the product are also elements of .   "
},
{
  "id": "quatmatalgpropexer",
  "level": "2",
  "url": "quaternionsection.html#quatmatalgpropexer",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "",
  "body": "Prove .  "
},
{
  "id": "quatmultrulesexer",
  "level": "2",
  "url": "quaternionsection.html#quatmultrulesexer",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "",
  "body": "Verify and .  "
},
{
  "id": "quaternionsection-5-6",
  "level": "2",
  "url": "quaternionsection.html#quaternionsection-5-6",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "",
  "body": " Verify .  "
},
{
  "id": "quatconjnormsubsect-2",
  "level": "2",
  "url": "quaternionsection.html#quatconjnormsubsect-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjugate modulus unit quaternions polar form "
},
{
  "id": "quatpolarformdetailsexer",
  "level": "2",
  "url": "quaternionsection.html#quatpolarformdetailsexer",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": "   Show that the following construction produces a polar form for a nonzero quaternion . Let . If , let , and let .  Fill in the remaining details on polar form for quaternions. What happens if ? What happens if ?  Are uniquely determined by ? If not, describe the possible choices for .    "
},
{
  "id": "quatconjnormmultexer",
  "level": "2",
  "url": "quaternionsection.html#quatconjnormmultexer",
  "type": "Checkpoint",
  "number": "1.2.6",
  "title": "",
  "body": "Verify the three equations above.  Work in . Start by checking that , where denotes the conjugate transpose of a matrix. Alternatively, write in polar form and use .  "
},
{
  "id": "rvrastispureexer",
  "level": "2",
  "url": "quaternionsection.html#rvrastispureexer",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "",
  "body": "Explain how we conclude that is pure when is a unit quaternion and is a pure quaternion.  "
},
{
  "id": "quatrotislinearexer",
  "level": "2",
  "url": "quaternionsection.html#quatrotislinearexer",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": "Show the details to prove that is linear.  "
},
{
  "id": "quatrotprop",
  "level": "2",
  "url": "quaternionsection.html#quatrotprop",
  "type": "Proposition",
  "number": "1.2.9",
  "title": "Quaternions and rotations of <span class=\"process-math\">\\(\\R^3_\\Quat\\)<\/span>.",
  "body": "Quaternions and rotations of  Let be a unit quaternion in polar form, and let be the linear transformation of the space of pure quaternions given by . The action of is a rotation by radians about the axis given by the unit vector .   "
},
{
  "id": "quatrotpropexer",
  "level": "2",
  "url": "quaternionsection.html#quatrotpropexer",
  "type": "Exercise",
  "number": "1.2.6.1",
  "title": "",
  "body": "Prove using the following outline. Let be a polar form for a unit quaternion . Show that .  Let be any pure unit quaternion orthogonal to , and let , so that the triple forms a right-handed coordinate system for . Show that (use equation ) and then explain how this proves the Proposition.     In deriving equation , you will obtain expressions and . Use equation to show that and . Show that the quaternion on the right side of has norm 1. Finally, use the fact that for real vectors that make an angle at the origin to determine the angle made by .  "
},
{
  "id": "quatrotcompinvexer",
  "level": "2",
  "url": "quaternionsection.html#quatrotcompinvexer",
  "type": "Exercise",
  "number": "1.2.6.2",
  "title": "",
  "body": "Show that the following hold for all .     "
},
{
  "id": "stereoprojsect",
  "level": "1",
  "url": "stereoprojsect.html",
  "type": "Section",
  "number": "1.3",
  "title": "Stereographic projection",
  "body": " Stereographic projection   Stereographic projection  Let  unit circle in the plane denote the unit circle in the -plane: Let denote the north pole (that is, the point at the top of the unit circle). Given a point on the unit circle, let denote the intersection of the line with the -axis. See . The map given by this rule is called stereographic projection . Using similar triangles, it is easy to see that .   Stereographic projection     Draw the relevant similar triangles and verify the formula .   We extend stereographic projection to the entire unit circle as follows. We call the set  extended real numbers  extended real numbers the extended real numbers , where is an element that is not a real number. Now we define stereographic projection by     stereographic projection  Stereographic projection  The definitions in the previous subsection extend naturally to higher dimensions. Here are the details for the main case of interest.  Let denote the unit sphere in : unit sphere in  Let denote the north pole (that is, the point at the top of the sphere, where the positive -axis is up ). Given a point on the unit sphere, let denote the intersection of the line with the -plane, which we identify with the complex plane . See . The map given by this rule is called stereographic projection . Using similar triangles, it is easy to see that .   Stereographic projection    We extend stereographic projection to the entire unit sphere as follows. We call the set  extended complex numbers  extended complex numbers the extended complex numbers , where is an element that is not a complex number. Now we define stereographic projection by     Conjugate Transformations  Let be a bijective map. We say that maps and and are conjugate transformations conjugate transformations (with respect to the bijection ) if . demonstrate examples of this definition for which is stereographic projection.  Show that if and only if .      Formulas for inverse stereographic projection   It is intuitively clear that stereographic projection is a bijection. Make this rigorous by finding a formula for the inverse.   For , find a formula for . Find .       For , find a formula for . Find .         Transformations that are conjugate via stereographic projection  Suggestion: Use for the exercises that follow.    Let and be given by Show that are conjugate transformations with respect to stereographic projection.    Let and be given by Show that are conjugate transformations with respect to stereographic projection.   Let and be given by Show that are conjugate transformations with respect to stereographic projection.   Let and be given by Show that are conjugate transformations with respect to stereographic projection.    Projections of endpoints of diameters Show that for any point in with . Conversely, suppose that for some . Show that .    "
},
{
  "id": "stereoprojsect-2-2",
  "level": "2",
  "url": "stereoprojsect.html#stereoprojsect-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stereographic projection "
},
{
  "id": "stereoprojfig",
  "level": "2",
  "url": "stereoprojsect.html#stereoprojfig",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Stereographic projection   "
},
{
  "id": "stereoproj1formulaexer",
  "level": "2",
  "url": "stereoprojsect.html#stereoproj1formulaexer",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": " Draw the relevant similar triangles and verify the formula .  "
},
{
  "id": "stereoprojsect-2-5",
  "level": "2",
  "url": "stereoprojsect.html#stereoprojsect-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extended real numbers "
},
{
  "id": "stereoprojsect-3-4",
  "level": "2",
  "url": "stereoprojsect.html#stereoprojsect-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stereographic projection "
},
{
  "id": "stereoproj2fig",
  "level": "2",
  "url": "stereoprojsect.html#stereoproj2fig",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " Stereographic projection   "
},
{
  "id": "stereoprojsect-3-6",
  "level": "2",
  "url": "stereoprojsect.html#stereoprojsect-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extended complex numbers "
},
{
  "id": "stereoprojsect-4-2",
  "level": "2",
  "url": "stereoprojsect.html#stereoprojsect-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjugate transformations "
},
{
  "id": "conjtransdefexer",
  "level": "2",
  "url": "stereoprojsect.html#conjtransdefexer",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": "Show that if and only if .  "
},
{
  "id": "inverse1dstereoexer",
  "level": "2",
  "url": "stereoprojsect.html#inverse1dstereoexer",
  "type": "Exercise",
  "number": "1.3.4.1",
  "title": "",
  "body": "For , find a formula for . Find .      "
},
{
  "id": "inverse2dstereoexer",
  "level": "2",
  "url": "stereoprojsect.html#inverse2dstereoexer",
  "type": "Exercise",
  "number": "1.3.4.2",
  "title": "",
  "body": "For , find a formula for . Find .      "
},
{
  "id": "stereo1dliftinversion",
  "level": "2",
  "url": "stereoprojsect.html#stereo1dliftinversion",
  "type": "Exercise",
  "number": "1.3.4.3",
  "title": "",
  "body": " Let and be given by Show that are conjugate transformations with respect to stereographic projection.  "
},
{
  "id": "mobiuszrotations",
  "level": "2",
  "url": "stereoprojsect.html#mobiuszrotations",
  "type": "Exercise",
  "number": "1.3.4.4",
  "title": "",
  "body": " Let and be given by Show that are conjugate transformations with respect to stereographic projection.  "
},
{
  "id": "stereo2dliftinversion",
  "level": "2",
  "url": "stereoprojsect.html#stereo2dliftinversion",
  "type": "Exercise",
  "number": "1.3.4.5",
  "title": "",
  "body": "Let and be given by Show that are conjugate transformations with respect to stereographic projection.  "
},
{
  "id": "mobiusxpiby2rotations",
  "level": "2",
  "url": "stereoprojsect.html#mobiusxpiby2rotations",
  "type": "Exercise",
  "number": "1.3.4.6",
  "title": "",
  "body": "Let and be given by Show that are conjugate transformations with respect to stereographic projection.  "
},
{
  "id": "stereoprojdiamends",
  "level": "2",
  "url": "stereoprojsect.html#stereoprojdiamends",
  "type": "Exercise",
  "number": "1.3.4.7",
  "title": "Projections of endpoints of diameters.",
  "body": "Projections of endpoints of diameters Show that for any point in with . Conversely, suppose that for some . Show that .  "
},
{
  "id": "equiv_relns_sect",
  "level": "1",
  "url": "equiv_relns_sect.html",
  "type": "Section",
  "number": "1.4",
  "title": "Equivalence relations",
  "body": " Equivalence relations   Definitions  A relation on a set is a subset of . Given a relation , we write , or just if is understood by context, to denote that . A relation is reflexive if for every in . A relation is symmetric if implies . A relation is transitive if and together imply that . A relation is called an equivalence relation equivalence relation if it is reflexive, symmetric, and transitive. Given an equivalence relation on and an element , we write to denote the set  equivalence class  the equivalence class of an element called the equivalence class of the element . The set of equivalence classes is denoted , that is,  the set of equivalence classes for an equivalence relation   A partition partition of a set of a set is a collection of nonempty disjoint sets whose union is .   The integers modulo an integer   Let be a positive integer. Let be the relation on the integers the integers given by (recall that the symbols for integers , pronounced divides , means for some integer ). It is easy to show that is an equivalence relation, and that the equivalence classes are precisely the set This set of equivalence classes is fundamental and pervasive in mathematics. Using standard notation, we write (pronounced is equivalent to mod ) to denote . In this text, we will follow the common practice of using to denote .     Verify that the relation is indeed an equivalence relation.  Verify that the equivalence classes of the equivalence relation are indeed . Hint: Use the division algorithm , which says that for any , there are unique integers , with in the range , such that .  Draw a sketch that shows how is partitioned by the mod equivalence classes.       Facts   Equivalence relations and partitions   Let be a set. Equivalence relations on and partitions of are in one-to-one correspondence, as follows. Given an equivalence relation on , the collection is a partition of . Conversely, given a partition of , the relation defined by is an equivalence relation. These correspondences are inverse to one another. That is, and .      A key component of the Fact is that equivalence classes are disjoint. Let be an equivalence relation on a set , and let . Show that either or .    Construction of functions on sets of equivalence classes  Let be an equivalence relation on a set , let denote the map given by , and let be a function. There exists a map such that for all if and only if is constant on equivalence classes (that is, if and only if .)   Note on terminology: when a function is constant on equivalence classes, we say that the associated function is well-defined well-defined function .   Construction of equivalence relations and partitions from functions  Given a function , there is a natural equivalence relation on given by The corresponding set of equivalence classes is . Furthermore, the function given by is a one-to-one correspondence.     The rational numbers Let be the set and let denote the set of rational numbers Define the relation on by Let be given by and let be given by .  Show that is reflexive, symmetric, and transitive.  Draw a sketch of showing the partition .  Is the map given by well-defined? Explain.  Draw a sketch of that shows the equivalence classes .  Is the map given by well-defined? Explain.  Draw a sketch of that shows the equivalence classes .  Explain why and are the same equivalence relation on . Explain why is in one-to-one correspondence with the rational numbers .      The integers modulo  Let be a positive integer.    Let be the complex number , and let be given by . Show that the equivalence relation given by is the same as .    Show that the operation of addition on given by is well-defined . This means showing that if and , then .    Show that the operation of multiplication on given by is well-defined.   Alternative construction of  Another standard definition of the set , together with its operations of addition and multiplication, is the following. Given an integer , we write to denote the remainder obtained when dividing by (the integer is the same as the integer in the statement of the division algorithm given in ). Now define to be the set define the addition operation on by and define the multiplication operation on by Show that this version of is equivalent to the version developed in and .     "
},
{
  "id": "equiv_relns_sect-2-2",
  "level": "2",
  "url": "equiv_relns_sect.html#equiv_relns_sect-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflexive symmetric transitive equivalence relation equivalence class "
},
{
  "id": "equiv_relns_sect-2-3",
  "level": "2",
  "url": "equiv_relns_sect.html#equiv_relns_sect-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partition "
},
{
  "id": "equivmodnisequivrelnexer",
  "level": "2",
  "url": "equiv_relns_sect.html#equivmodnisequivrelnexer",
  "type": "Checkpoint",
  "number": "1.4.1",
  "title": "",
  "body": "   Verify that the relation is indeed an equivalence relation.  Verify that the equivalence classes of the equivalence relation are indeed . Hint: Use the division algorithm , which says that for any , there are unique integers , with in the range , such that .  Draw a sketch that shows how is partitioned by the mod equivalence classes.    "
},
{
  "id": "equivrelpart",
  "level": "2",
  "url": "equiv_relns_sect.html#equivrelpart",
  "type": "Fact",
  "number": "1.4.2",
  "title": "Equivalence relations and partitions.",
  "body": "Equivalence relations and partitions   Let be a set. Equivalence relations on and partitions of are in one-to-one correspondence, as follows. Given an equivalence relation on , the collection is a partition of . Conversely, given a partition of , the relation defined by is an equivalence relation. These correspondences are inverse to one another. That is, and .   "
},
{
  "id": "equivclassesdisjointexer",
  "level": "2",
  "url": "equiv_relns_sect.html#equivclassesdisjointexer",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "",
  "body": " A key component of the Fact is that equivalence classes are disjoint. Let be an equivalence relation on a set , and let . Show that either or .  "
},
{
  "id": "welldefinedness",
  "level": "2",
  "url": "equiv_relns_sect.html#welldefinedness",
  "type": "Fact",
  "number": "1.4.4",
  "title": "Construction of functions on sets of equivalence classes.",
  "body": "Construction of functions on sets of equivalence classes  Let be an equivalence relation on a set , let denote the map given by , and let be a function. There exists a map such that for all if and only if is constant on equivalence classes (that is, if and only if .)  "
},
{
  "id": "equiv_relns_sect-4-5",
  "level": "2",
  "url": "equiv_relns_sect.html#equiv_relns_sect-4-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "well-defined "
},
{
  "id": "constructequivrelpart",
  "level": "2",
  "url": "equiv_relns_sect.html#constructequivrelpart",
  "type": "Fact",
  "number": "1.4.5",
  "title": "Construction of equivalence relations and partitions from functions.",
  "body": "Construction of equivalence relations and partitions from functions  Given a function , there is a natural equivalence relation on given by The corresponding set of equivalence classes is . Furthermore, the function given by is a one-to-one correspondence.  "
},
{
  "id": "rationalsequivrelnexer",
  "level": "2",
  "url": "equiv_relns_sect.html#rationalsequivrelnexer",
  "type": "Exercise",
  "number": "1.4.4.1",
  "title": "The rational numbers.",
  "body": "The rational numbers Let be the set and let denote the set of rational numbers Define the relation on by Let be given by and let be given by .  Show that is reflexive, symmetric, and transitive.  Draw a sketch of showing the partition .  Is the map given by well-defined? Explain.  Draw a sketch of that shows the equivalence classes .  Is the map given by well-defined? Explain.  Draw a sketch of that shows the equivalence classes .  Explain why and are the same equivalence relation on . Explain why is in one-to-one correspondence with the rational numbers .    "
},
{
  "id": "zmodnins1",
  "level": "2",
  "url": "equiv_relns_sect.html#zmodnins1",
  "type": "Exercise",
  "number": "1.4.4.2",
  "title": "",
  "body": " Let be the complex number , and let be given by . Show that the equivalence relation given by is the same as .  "
},
{
  "id": "intmodnadd",
  "level": "2",
  "url": "equiv_relns_sect.html#intmodnadd",
  "type": "Exercise",
  "number": "1.4.4.3",
  "title": "",
  "body": " Show that the operation of addition on given by is well-defined . This means showing that if and , then .  "
},
{
  "id": "intmodnmult",
  "level": "2",
  "url": "equiv_relns_sect.html#intmodnmult",
  "type": "Exercise",
  "number": "1.4.4.4",
  "title": "",
  "body": " Show that the operation of multiplication on given by is well-defined.  "
},
{
  "id": "zmodnaltconstr",
  "level": "2",
  "url": "equiv_relns_sect.html#zmodnaltconstr",
  "type": "Exercise",
  "number": "1.4.4.5",
  "title": "Alternative construction of <span class=\"process-math\">\\(\\Z_n\\)<\/span>.",
  "body": "Alternative construction of  Another standard definition of the set , together with its operations of addition and multiplication, is the following. Given an integer , we write to denote the remainder obtained when dividing by (the integer is the same as the integer in the statement of the division algorithm given in ). Now define to be the set define the addition operation on by and define the multiplication operation on by Show that this version of is equivalent to the version developed in and .  "
},
{
  "id": "extra_topics_exercises_section",
  "level": "1",
  "url": "extra_topics_exercises_section.html",
  "type": "Section",
  "number": "1.5",
  "title": "More preliminary topics",
  "body": " More preliminary topics  A useful tool: commutative diagrams  A directed graph directed graph (or digraph digraph ) is a set of vertices and a set of directed edges . We draw pictures of digraphs by drawing an arrow pointing from a vertex to a vertex whenever . See .  A path directed graph path in a directed graph  in a directed graph is a sequence of vertices such that for . The vertex is called the initial vertex and is called the final vertex of the path .   Example of a directed graph with vertex set and edge set . The vertex sequences and are both paths from to .    A commutative diagram commutative diagram is a directed graph with two properties.  Vertices are labeled by sets and directed edges are labeled by functions between those sets. That is, the directed edge denotes a function .  Whenever there are two paths from an initial vertex to a final vertex , the composition of functions along one path is equal to the composition of functions along the other path. That is, if is a path with edges for and is a path with edges for , then      shows a commutative diagram that illustrates the definition of conjugate transformations. shows a commutative diagram that goes with .   A commutative diagram illustrating the definition of conjugate transformations given in .     A commutative diagram showing the relationship in .        Let be a pure, unit quaternion. Use to show that the map given by is the reflection across the plane normal to . That is, show that . See .  The reflection of across the plane normal to .     Commutative diagram examples   Draw a commutative diagram that illustrates the results of .  The distributive law for says that for all . Label the maps in the commutative diagram below ( ) to express the distributive law.         "
},
{
  "id": "extra_topics_exercises_section-2-2",
  "level": "2",
  "url": "extra_topics_exercises_section.html#extra_topics_exercises_section-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "directed graph "
},
{
  "id": "extra_topics_exercises_section-2-3",
  "level": "2",
  "url": "extra_topics_exercises_section.html#extra_topics_exercises_section-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "path initial vertex final vertex "
},
{
  "id": "digraphegfig",
  "level": "2",
  "url": "extra_topics_exercises_section.html#digraphegfig",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": " Example of a directed graph with vertex set and edge set . The vertex sequences and are both paths from to .   "
},
{
  "id": "extra_topics_exercises_section-2-5",
  "level": "2",
  "url": "extra_topics_exercises_section.html#extra_topics_exercises_section-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative diagram "
},
{
  "id": "conjtransdeffig",
  "level": "2",
  "url": "extra_topics_exercises_section.html#conjtransdeffig",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " A commutative diagram illustrating the definition of conjugate transformations given in .   "
},
{
  "id": "welldefinednessfig",
  "level": "2",
  "url": "extra_topics_exercises_section.html#welldefinednessfig",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": " A commutative diagram showing the relationship in .   "
},
{
  "id": "quatreflectionexer",
  "level": "2",
  "url": "extra_topics_exercises_section.html#quatreflectionexer",
  "type": "Exercise",
  "number": "1.5.2.1",
  "title": "",
  "body": "  Let be a pure, unit quaternion. Use to show that the map given by is the reflection across the plane normal to . That is, show that . See .  The reflection of across the plane normal to .    "
},
{
  "id": "diagramexer",
  "level": "2",
  "url": "extra_topics_exercises_section.html#diagramexer",
  "type": "Exercise",
  "number": "1.5.2.2",
  "title": "Commutative diagram examples.",
  "body": "Commutative diagram examples   Draw a commutative diagram that illustrates the results of .  The distributive law for says that for all . Label the maps in the commutative diagram below ( ) to express the distributive law.       "
},
{
  "id": "groupintrosection",
  "level": "1",
  "url": "groupintrosection.html",
  "type": "Section",
  "number": "2.1",
  "title": "Examples of groups",
  "body": " Examples of groups   Groups are one of the most basic algebraic objects, yet have structure rich enough to be widely useful in all branches of mathematics and its applications. A group is a set with a binary operation that has a short list of specific properties. Before we give the complete definition of a group in the next section (see ), this section introduces examples of some important and useful groups.    Permutations  A permutation permutation permutation of a set  of a set is a bijection from to itself, that is, a function that is both one-to-one and onto. Given two permutations of a set , we write to denote the composition of functions .     Let be a set and let  permutations of a set denote the set of all permutations of . The group of permutations of is the set  groups, list of group of permutations of a set  permutation group of a set together with the binary operation given by function composition, that is, . For the special case for some integer , the group is called the symmetric group , and is denoted . symmetric group    groups, list of symmetric group the symmetric group on symbols      Notation: We will denote the element in using the symbols , that is, the list of values of , separated by commas and enclosed in square brackets. Writing to denote is a compact replacement for the standard 2-row notation that is used in most introductory textbooks. We choose to use square brackets, rather than rounded parentheses, to avoid confusion with the standard notation for cyclic permutations, introduced in . For example, we write to denote the permutation given by   Let and let . Find , , and .      , ,     Symmetries of regular polygons  Informally and intuitively, we say that regular polygons have rotational and mirror symmetries. Specifically, the rotational symmetries are rotations about the center of the polygon, clockwise or counterclockwise, by some angle , where are any two vertices. The mirror symmetries of the polygon are reflections across lines of the form or , where is any vertex and is the midpoint of any edge of the polygon. See .   Symmetries of a regular -gon    Here are some standard notations for rotations and reflections in the plane. See .  Rotations and reflections in the plane      Rotations in the plane  Fix a center point . We write to denote the rotation by angle about the point . rotation (in the plane)   planar rotation by angle Angle units can be revolutions or degrees or radians, whatever is most convenient. We observe the usual convention that positive values of denote counterclockwise rotations and negative values of denote clockwise rotations.    Reflections in the plane  We write to denote the reflection across the line . reflection (in the plane)   planar reflection across line This means that if and only if and the distance from to is the same as the distance from to .    Given symmetries , we write to denote the composition . For example, for the symmetries of the equilateral triangle, with angles in degrees, and with for some vertex , we have and .    The dihedral group the dihedral group  groups, list of dihedral group , denoted   dihedral group , is the set of rotation and reflection symmetries of the regular -gon together with the binary operation of function composition.   Let be the square centered at the origin in the -plane with vertices at . The square has lines of symmetry (horizontal, vertical, diagonal, and another diagonal) where denote the axes, respectively, and denote the lines , respectively. See .   Lines of symmetry for the square.    The symmetries of the square are where the rotation angles units are revolutions. Find the following.                         The norm 1 complex numbers   The circle group circle group groups, list of circle group   , denoted , is the set of norm 1 complex numbers together with the binary operation given by complex multiplication, that is, .     Show that if are elements of , then their product is also in .    The -th roots of unity  Let be an integer. The set  the th roots of unity  is called the set of (complex) -th roots of unity .     Let . Show that is in for all integers .  Show that, if is an element of , then for some integer .  Show that the set consists of precisely the elements       The set , together with the operation of complex multiplication, is called the group of -th roots of unity groups, list of the -th roots of unity  .       Integers    The set of integers, together with the operation of addition, is called the group of integers . Similarly, the set of integers modulo (where is some integer ), together with the operation of addition modulo , is called the group of integers mod .       Invertible matrices  Let be an integer. We write to denote the set of invertible matrices with real entries. We write to denote the set of invertible matrices with complex entries.     The set (respectively, ), together with the binary operation of matrix multiplication, is called the group of real (respectively, complex) invertible matrices , or also the general linear group . general linear group  groups, list of general linear group   the group of invertible matrices with real entries   the group of invertible matrices with complex entries       Nonzero elements in a field  Let be a field, such as the rational numbers , the real numbers , or the complex numbers . We write to denote the set of nonzero elements in .     Let be a field. The set   group of nonzero elements in a field , together with the binary operation of multiplication, is called the group of nonzero elements in the field .     Unit quaternions    The set of quaternions of norm 1 (defined in ), together with the binary operation of quaternion multiplication, is called the group of unit quaternions .       Matrices for the dihedral group  Let denote the -axis in the -plane. The map is a linear map whose matrix is . The map is a linear map whose matrix is . Find the matrices for the remaining elements of the dihedral group as specified in .   Complex number operations for the dihedral group  Let denote the real line in the complex plane . The map is complex conjugation . The map is the map . Find the maps for the remaining elements of the dihedral group as specified in .   Recall that a binary operation is commutative commutative binary operation if for all possible values of . Which of the group operations in the examples in this section are commutative? Which are not?  Show that is not commutative for .     One of the properties of a group is the existence of an identity element. This is a group element with the property that for every in . Find an identity element for each of the groups in the examples in this section.   One of the properties of a group is the existence of an inverse element for every element in the group. This means that for every in a group , there is an element with the property that , where is the identity element of the group. Find inverses for the following list of group elements.  in   in (where is in degrees)  in  in  in  in  in       "
},
{
  "id": "groupintrosection-3-2",
  "level": "2",
  "url": "groupintrosection.html#groupintrosection-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "permutation "
},
{
  "id": "groupintrosection-3-3",
  "level": "2",
  "url": "groupintrosection.html#groupintrosection-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric group "
},
{
  "id": "permutation-reading-exercise",
  "level": "2",
  "url": "groupintrosection.html#permutation-reading-exercise",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "",
  "body": "Let and let . Find , , and .      , ,  "
},
{
  "id": "ngonsymmfig",
  "level": "2",
  "url": "groupintrosection.html#ngonsymmfig",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " Symmetries of a regular -gon   "
},
{
  "id": "rotreflfig",
  "level": "2",
  "url": "groupintrosection.html#rotreflfig",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": " Rotations and reflections in the plane   "
},
{
  "id": "groupintrosection-4-8",
  "level": "2",
  "url": "groupintrosection.html#groupintrosection-4-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dihedral group "
},
{
  "id": "dihedral-reading-exercise",
  "level": "2",
  "url": "groupintrosection.html#dihedral-reading-exercise",
  "type": "Checkpoint",
  "number": "2.1.6",
  "title": "",
  "body": "Let be the square centered at the origin in the -plane with vertices at . The square has lines of symmetry (horizontal, vertical, diagonal, and another diagonal) where denote the axes, respectively, and denote the lines , respectively. See .   Lines of symmetry for the square.    The symmetries of the square are where the rotation angles units are revolutions. Find the following.                       "
},
{
  "id": "s1grpdef-2",
  "level": "2",
  "url": "groupintrosection.html#s1grpdef-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circle group "
},
{
  "id": "s1closedgpexer",
  "level": "2",
  "url": "groupintrosection.html#s1closedgpexer",
  "type": "Checkpoint",
  "number": "2.1.9",
  "title": "",
  "body": "Show that if are elements of , then their product is also in .  "
},
{
  "id": "groupintrosection-6-2",
  "level": "2",
  "url": "groupintrosection.html#groupintrosection-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(complex) -th roots of unity "
},
{
  "id": "rootsofunitygpfacts",
  "level": "2",
  "url": "groupintrosection.html#rootsofunitygpfacts",
  "type": "Checkpoint",
  "number": "2.1.10",
  "title": "",
  "body": "   Let . Show that is in for all integers .  Show that, if is an element of , then for some integer .  Show that the set consists of precisely the elements     "
},
{
  "id": "groupintrosection-6-4",
  "level": "2",
  "url": "groupintrosection.html#groupintrosection-6-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group of -th roots of unity "
},
{
  "id": "groupintrosection-7-2",
  "level": "2",
  "url": "groupintrosection.html#groupintrosection-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group of integers group of integers mod "
},
{
  "id": "groupintrosection-8-3",
  "level": "2",
  "url": "groupintrosection.html#groupintrosection-8-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group of real (respectively, complex) invertible matrices general linear group "
},
{
  "id": "groupintrosection-9-3",
  "level": "2",
  "url": "groupintrosection.html#groupintrosection-9-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group of nonzero elements "
},
{
  "id": "groupintrosection-10-2",
  "level": "2",
  "url": "groupintrosection.html#groupintrosection-10-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group of unit quaternions "
},
{
  "id": "d4matexer",
  "level": "2",
  "url": "groupintrosection.html#d4matexer",
  "type": "Exercise",
  "number": "2.1.9.1",
  "title": "Matrices for the dihedral group <span class=\"process-math\">\\(D_4\\)<\/span>.",
  "body": "Matrices for the dihedral group  Let denote the -axis in the -plane. The map is a linear map whose matrix is . The map is a linear map whose matrix is . Find the matrices for the remaining elements of the dihedral group as specified in .  "
},
{
  "id": "d4complexopexer",
  "level": "2",
  "url": "groupintrosection.html#d4complexopexer",
  "type": "Exercise",
  "number": "2.1.9.2",
  "title": "Complex number operations for the dihedral group <span class=\"process-math\">\\(D_4\\)<\/span>.",
  "body": "Complex number operations for the dihedral group  Let denote the real line in the complex plane . The map is complex conjugation . The map is the map . Find the maps for the remaining elements of the dihedral group as specified in .  "
},
{
  "id": "commutativeornotexer",
  "level": "2",
  "url": "groupintrosection.html#commutativeornotexer",
  "type": "Exercise",
  "number": "2.1.9.3",
  "title": "",
  "body": "Recall that a binary operation is commutative commutative binary operation if for all possible values of . Which of the group operations in the examples in this section are commutative? Which are not?  Show that is not commutative for .    "
},
{
  "id": "identityexer",
  "level": "2",
  "url": "groupintrosection.html#identityexer",
  "type": "Exercise",
  "number": "2.1.9.4",
  "title": "",
  "body": "One of the properties of a group is the existence of an identity element. This is a group element with the property that for every in . Find an identity element for each of the groups in the examples in this section.  "
},
{
  "id": "inverseeltexer",
  "level": "2",
  "url": "groupintrosection.html#inverseeltexer",
  "type": "Exercise",
  "number": "2.1.9.5",
  "title": "",
  "body": "One of the properties of a group is the existence of an inverse element for every element in the group. This means that for every in a group , there is an element with the property that , where is the identity element of the group. Find inverses for the following list of group elements.  in   in (where is in degrees)  in  in  in  in  in     "
},
{
  "id": "groupdefsection",
  "level": "1",
  "url": "groupdefsection.html",
  "type": "Section",
  "number": "2.2",
  "title": "Definition of a group",
  "body": " Definition of a group  We will use the notation to denote a binary operation on a set that sends the pair to . Recall that a binary operation is associative means that for all . associative binary operation     Group   A group group is a set , together with a binary operation with the following properties.  The operation is associative.  There exists an element in , called an identity element, such that for all .  For every , there exists an element , called an inverse element for , such that .        Immediate consequences of the definition of group   Let be a group. The element in the second property of is unique. Given , the element in the third property of is unique.      Multiplicative notation   Let be a group. By , we may speak of an identity element as the identity element for . identity element Given , we may refer to an inverse element for as the inverse of , and we write to denote this element. inverse of a group element In practice, we often omit the operator , and simply write to denote . We adopt the convention that is the identity element. For , we write to denote and we write to denote . This set of notational conventions is called multiplicative notation multiplicative notation .     Abelian group, additive notation  In general, group operations are not commutative (see ). A group with a commutative operation is called Abelian . Abelian group For some Abelian groups, such as the group of integers, the group operation is called addition , and we write instead of using the multiplicative notation . We write to denote the identity element, we write to denote the inverse of , and we write to denote for positive integers . This set of notational conventions is called additive notation additive notation .      Order of a group  The number of elements in a finite group is called the order order of a group of the group. A group with infinitely many elements is said to be of infinite order . We write  order of the group   to denote the order of the group .      The trivial group  A group with a single element (which is necessarily the identity element) is called a trivial group groups, list of trivial group  . In multiplicative notation, one might write , and in additive notation, one might write , to denote a trivial group.     Uniqueness of the identity element  Let be a group. Suppose that both satisfy the second property of the , that is, suppose for all . Show that .   Uniqueness of inverse elements  Let be a group with identity element . Let and suppose that . Show that .   The cancellation law  Suppose that for some elements in a group . Show that . [Note that the same proof, mutatis mutandis, shows that if , then .]   The socks and shoes property  Let be elements of a group . Show that .   Product Groups product group Given two groups with group operations , the Cartesian product is a group with the operation given by Show that this operation satisfies the definition of a group.   Cyclic groups cyclic group A group is called cyclic if there exists an element in , called a generator , such that the sequence contains all of the elements in .  Suppose that a group is finite and cyclic, with generator . Show that   The group of integers is cyclic. Find all of the generators.  The group is cyclic. Find all of the generators.  The group is cyclic. Find all of the generators.  Show that the group is not cyclic.      For part a, let be the least positive integer such that (explain why exists!). Given an arbitrary element , write for some , then use the Division Algorithm.   Cyclic permutations cyclic permutations   Let be positive integers with , and let be a set of distinct elements in . We write to denote the permutation in (see ) given by the assignments and for . If , the permutation is the identity permutation. A permutation of the form is called a -cycle permutation -cycle  . For example, the element is a 3-cycle in because acts on the set by and acts on as the identity. Note that cycle notation is not unique. For example, we have . A permutation is called cyclic cyclic permutation  permutation cyclic permutation  if it is a -cycle for some . A 2-cycle is called a transposition transposition  permutation transposition  .  Find all of the cyclic permutations in . Find their inverses.  Find all of the cyclic permutations in .     Cycles and are called disjoint disjoint cyclic permutations  if the sets and are disjoint, that is, if for all . Show that every permutation in is either a cycle or a product of disjoint cycles.   Every permutation is a product of transpositions  Show that every permutation in can be written as a product of transpositions.  Show that factoring a permutation into a product of transpositions is not unique by writing the identity permutation in as a product of transpositions in two different ways.     Cayley tables  The Cayley table for a finite group is a two-dimensional array with rows and columns labeled by the elements of the group, and with entry in position with row label and column label . Partial Cayley tables for ( ) and ( ) are given below.   (Partial) Cayley table for . The symbol denotes the identity permutation.     (Partial) Cayley table for . (See for notation for the elements of .)   Fill in the remaining entries in the Cayley tables for and .  Prove that the Cayley table for any group is a Latin square . This means that every element of the group appears exactly once in each row and in each column.            "
},
{
  "id": "groupdefsection-3",
  "level": "2",
  "url": "groupdefsection.html#groupdefsection-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group identity inverse "
},
{
  "id": "groupdefnprop",
  "level": "2",
  "url": "groupdefsection.html#groupdefnprop",
  "type": "Proposition",
  "number": "2.2.2",
  "title": "Immediate consequences of the definition of group.",
  "body": " Immediate consequences of the definition of group   Let be a group. The element in the second property of is unique. Given , the element in the third property of is unique.   "
},
{
  "id": "groupdefsection-5",
  "level": "2",
  "url": "groupdefsection.html#groupdefsection-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplicative notation "
},
{
  "id": "groupdefsection-6",
  "level": "2",
  "url": "groupdefsection.html#groupdefsection-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Abelian additive notation "
},
{
  "id": "groupdefsection-7",
  "level": "2",
  "url": "groupdefsection.html#groupdefsection-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "groupdefsection-8",
  "level": "2",
  "url": "groupdefsection.html#groupdefsection-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trivial group "
},
{
  "id": "idunique",
  "level": "2",
  "url": "groupdefsection.html#idunique",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "Uniqueness of the identity element.",
  "body": "Uniqueness of the identity element  Let be a group. Suppose that both satisfy the second property of the , that is, suppose for all . Show that .  "
},
{
  "id": "invunique",
  "level": "2",
  "url": "groupdefsection.html#invunique",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "Uniqueness of inverse elements.",
  "body": "Uniqueness of inverse elements  Let be a group with identity element . Let and suppose that . Show that .  "
},
{
  "id": "cancellation",
  "level": "2",
  "url": "groupdefsection.html#cancellation",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "The cancellation law.",
  "body": "The cancellation law  Suppose that for some elements in a group . Show that . [Note that the same proof, mutatis mutandis, shows that if , then .]  "
},
{
  "id": "socksandshoes",
  "level": "2",
  "url": "groupdefsection.html#socksandshoes",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "The “socks and shoes” property.",
  "body": "The socks and shoes property  Let be elements of a group . Show that .  "
},
{
  "id": "productgroupexer",
  "level": "2",
  "url": "groupdefsection.html#productgroupexer",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "Product Groups.",
  "body": "Product Groups product group Given two groups with group operations , the Cartesian product is a group with the operation given by Show that this operation satisfies the definition of a group.  "
},
{
  "id": "cyclicgroups",
  "level": "2",
  "url": "groupdefsection.html#cyclicgroups",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "Cyclic groups.",
  "body": "Cyclic groups cyclic group A group is called cyclic if there exists an element in , called a generator , such that the sequence contains all of the elements in .  Suppose that a group is finite and cyclic, with generator . Show that   The group of integers is cyclic. Find all of the generators.  The group is cyclic. Find all of the generators.  The group is cyclic. Find all of the generators.  Show that the group is not cyclic.      For part a, let be the least positive integer such that (explain why exists!). Given an arbitrary element , write for some , then use the Division Algorithm.  "
},
{
  "id": "cyclicpermutations",
  "level": "2",
  "url": "groupdefsection.html#cyclicpermutations",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "Cyclic permutations.",
  "body": "Cyclic permutations cyclic permutations   Let be positive integers with , and let be a set of distinct elements in . We write to denote the permutation in (see ) given by the assignments and for . If , the permutation is the identity permutation. A permutation of the form is called a -cycle permutation -cycle  . For example, the element is a 3-cycle in because acts on the set by and acts on as the identity. Note that cycle notation is not unique. For example, we have . A permutation is called cyclic cyclic permutation  permutation cyclic permutation  if it is a -cycle for some . A 2-cycle is called a transposition transposition  permutation transposition  .  Find all of the cyclic permutations in . Find their inverses.  Find all of the cyclic permutations in .    "
},
{
  "id": "disjointcycleproductexer",
  "level": "2",
  "url": "groupdefsection.html#disjointcycleproductexer",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": "Cycles and are called disjoint disjoint cyclic permutations  if the sets and are disjoint, that is, if for all . Show that every permutation in is either a cycle or a product of disjoint cycles.  "
},
{
  "id": "permtransprodexer",
  "level": "2",
  "url": "groupdefsection.html#permtransprodexer",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "Every permutation is a product of transpositions.",
  "body": "Every permutation is a product of transpositions  Show that every permutation in can be written as a product of transpositions.  Show that factoring a permutation into a product of transpositions is not unique by writing the identity permutation in as a product of transpositions in two different ways.    "
},
{
  "id": "cayleytable",
  "level": "2",
  "url": "groupdefsection.html#cayleytable",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "Cayley tables.",
  "body": "Cayley tables  The Cayley table for a finite group is a two-dimensional array with rows and columns labeled by the elements of the group, and with entry in position with row label and column label . Partial Cayley tables for ( ) and ( ) are given below.   (Partial) Cayley table for . The symbol denotes the identity permutation.     (Partial) Cayley table for . (See for notation for the elements of .)   Fill in the remaining entries in the Cayley tables for and .  Prove that the Cayley table for any group is a Latin square . This means that every element of the group appears exactly once in each row and in each column.          "
},
{
  "id": "subgroups_cosets_section",
  "level": "1",
  "url": "subgroups_cosets_section.html",
  "type": "Section",
  "number": "2.3",
  "title": "Subgroups and cosets",
  "body": " Subgroups and cosets    Subgroups and cosets   subgroup  coset A subset of a group is called a subgroup of if itself is a group under the group operation of restricted to . We write to indicate that is a subgroup of . Given a subgroup of , and given an element in , the set is called a (left) coset of . The set of all cosets of is denoted .      Consider as described in .   Is the subset of rotations a subgroup of ? Why or why not?  Is the subset of reflections a subgroup of ? Why or why not?        Yes. The composition of any two rotations is a rotation, and every rotation has an inverse that is also a rotation.  No. Just observe that is not a reflection. The group operation on does not restrict properly to the subset of reflections.    Find for , .        Subgroup tests two-step subgroup test  one-step subgroup test   Let be a subset of a group . The following are equivalent.  is a subgroup of   (2-step subgroup test)  is nonempty, is in for every in , and is in for every in    (1-step subgroup test)  is nonempty and is in for every in       Subgroup generated by a set of elements  Let be a nonempty subset of a group , and let denote the set of inverses of elements in . We write to denote the set of all elements of of the form where ranges over all positive integers and each is in for . The set is a subgroup of , called the subgroup generated by the set subgroup generated by a set , and the elements of are called the generators generators of a (sub)group of .     Comment on notational convention: If is finite, we write for , instead of the more cumbersome .  If is a cyclic group with generator , then .    Show that is indeed a subgroup of . How would this fail if were empty?    Find .  Find .             Cosets as equivalence classes   Let be a group and let be a subgroup of . Let be the relation on defined by if and only if . The relation is an equivalence relation on , and the equivalence classes are the cosets of , that is, we have .      Cosets as a partition  Let be a group and let be a subgroup of . The set of cosets of form a partition of .       Prove . Be aware of the following subtlety: a subgroup of a group must have an identity element, but does not require that it be the same as the identity element for . Similarly, an element of must have in inverse, but does not require that it be the same as the inverse in . Suggestion: start by proving a lemma that says if is a subgroup of , then the identity element for must be the same as the identity element for , and that inverses of elements in are the same as inverses in . Then use the lemma in your proof that statements (i), (ii), and (iii) are equivalent.    Find all the subgroups of .    In the list of values permutation notation of , the subgroups of are , , , , , and . In cycle notation, the subgroups of (in the same order) are , , , , , .    Find all the cosets of the subgroup of .   Subgroups of and   Let be a subgroup of . Show that either or , where is the smallest positive element in .  Let be a subgroup of . Show that either or , where is the smallest positive element in .  Let be positive integers. Show that      Consequence of this exercise: The greatest common divisor of integers is the smallest positive integer of the form over all integers . Two integers are relatively prime if and only if there exist integers such that .  Suggestion for part (c): Do the case first.   Centralizers, Center of a group  The centralizer centralizer of a group element   the centralizer of an element in a group  of an element in a group , denoted , is the set The center center (of a group)   the center of a group   of a group , denoted , is the set   Show that the centralizer of any element in a group is a subgroup of .  Show that the center of a group is a subgroup of .     The order of a group element Let be an element of a group . The order order of a group element of , denoted , is the smallest positive integer such that , if such an integer exists. If there is no positive integer such that , then is said to have infinite order. Show that, if the order of is finite, say , then .  Consequence of this exercise: If is cyclic with generator , then .   Cosets of a subgroup partition the group, Lagrange's Theorem    Prove .  Now suppose that a group is finite. Show that all of the cosets of a subgroup have the same size.  Prove Lagrange's Theorem, stated below.      Lagrange's Theorem  Lagrange's Theorem  If is a finite group and is a subgroup, then the order of divides the order of .    For part (b), let be cosets. Show that the function given by is a bijection.   Consequences of Lagrange's Theorem   Show that the order of any element of a finite group divides the order of the group.  Let be a finite group, and let . Show that .  Show that a group of prime order is cyclic.      "
},
{
  "id": "subgroups_cosets_section-2",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgroups_cosets_section-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subgroup (left) coset "
},
{
  "id": "dihedral_subgroup_reading_exercise",
  "level": "2",
  "url": "subgroups_cosets_section.html#dihedral_subgroup_reading_exercise",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "",
  "body": "Consider as described in .   Is the subset of rotations a subgroup of ? Why or why not?  Is the subset of reflections a subgroup of ? Why or why not?        Yes. The composition of any two rotations is a rotation, and every rotation has an inverse that is also a rotation.  No. Just observe that is not a reflection. The group operation on does not restrict properly to the subset of reflections.   "
},
{
  "id": "subgroups_cosets_section-4",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgroups_cosets_section-4",
  "type": "Checkpoint",
  "number": "2.3.3",
  "title": "",
  "body": "Find for , .     "
},
{
  "id": "subgroups_cosets_section-5",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgroups_cosets_section-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(2-step subgroup test) (1-step subgroup test) "
},
{
  "id": "subgroups_cosets_section-6",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgroups_cosets_section-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subgroup generated by the set generators "
},
{
  "id": "subgroups_cosets_section-8-1",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgroups_cosets_section-8-1",
  "type": "Observation",
  "number": "2.3.6",
  "title": "",
  "body": "If is a cyclic group with generator , then .  "
},
{
  "id": "subgpgenbysetexer",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgpgenbysetexer",
  "type": "Checkpoint",
  "number": "2.3.7",
  "title": "",
  "body": "Show that is indeed a subgroup of . How would this fail if were empty?  "
},
{
  "id": "generators-reading-exer",
  "level": "2",
  "url": "subgroups_cosets_section.html#generators-reading-exer",
  "type": "Checkpoint",
  "number": "2.3.8",
  "title": "",
  "body": " Find .  Find .          "
},
{
  "id": "cosetspartition",
  "level": "2",
  "url": "subgroups_cosets_section.html#cosetspartition",
  "type": "Proposition",
  "number": "2.3.9",
  "title": "Cosets as equivalence classes.",
  "body": " Cosets as equivalence classes   Let be a group and let be a subgroup of . Let be the relation on defined by if and only if . The relation is an equivalence relation on , and the equivalence classes are the cosets of , that is, we have .   "
},
{
  "id": "subgroups_cosets_section-12-1",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgroups_cosets_section-12-1",
  "type": "Corollary",
  "number": "2.3.10",
  "title": "Cosets as a partition.",
  "body": "Cosets as a partition  Let be a group and let be a subgroup of . The set of cosets of form a partition of .   "
},
{
  "id": "subgrouptestsexer",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgrouptestsexer",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": " Prove . Be aware of the following subtlety: a subgroup of a group must have an identity element, but does not require that it be the same as the identity element for . Similarly, an element of must have in inverse, but does not require that it be the same as the inverse in . Suggestion: start by proving a lemma that says if is a subgroup of , then the identity element for must be the same as the identity element for , and that inverses of elements in are the same as inverses in . Then use the lemma in your proof that statements (i), (ii), and (iii) are equivalent.  "
},
{
  "id": "subgroups_cosets_section-13-2",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgroups_cosets_section-13-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": " Find all the subgroups of .    In the list of values permutation notation of , the subgroups of are , , , , , and . In cycle notation, the subgroups of (in the same order) are , , , , , .  "
},
{
  "id": "d4cosetexer",
  "level": "2",
  "url": "subgroups_cosets_section.html#d4cosetexer",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": " Find all the cosets of the subgroup of .  "
},
{
  "id": "subgpsofzexer",
  "level": "2",
  "url": "subgroups_cosets_section.html#subgpsofzexer",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "Subgroups of <span class=\"process-math\">\\(\\Z\\)<\/span> and <span class=\"process-math\">\\(\\Z_n\\)<\/span>.",
  "body": "Subgroups of and   Let be a subgroup of . Show that either or , where is the smallest positive element in .  Let be a subgroup of . Show that either or , where is the smallest positive element in .  Let be positive integers. Show that      Consequence of this exercise: The greatest common divisor of integers is the smallest positive integer of the form over all integers . Two integers are relatively prime if and only if there exist integers such that .  Suggestion for part (c): Do the case first.  "
},
{
  "id": "center",
  "level": "2",
  "url": "subgroups_cosets_section.html#center",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "Centralizers, Center of a group.",
  "body": "Centralizers, Center of a group  The centralizer centralizer of a group element   the centralizer of an element in a group  of an element in a group , denoted , is the set The center center (of a group)   the center of a group   of a group , denoted , is the set   Show that the centralizer of any element in a group is a subgroup of .  Show that the center of a group is a subgroup of .    "
},
{
  "id": "orderofaneltexer",
  "level": "2",
  "url": "subgroups_cosets_section.html#orderofaneltexer",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "The order of a group element.",
  "body": "The order of a group element Let be an element of a group . The order order of a group element of , denoted , is the smallest positive integer such that , if such an integer exists. If there is no positive integer such that , then is said to have infinite order. Show that, if the order of is finite, say , then .  Consequence of this exercise: If is cyclic with generator , then .  "
},
{
  "id": "cosetspartitionexer",
  "level": "2",
  "url": "subgroups_cosets_section.html#cosetspartitionexer",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "Cosets of a subgroup partition the group, Lagrange’s Theorem.",
  "body": "Cosets of a subgroup partition the group, Lagrange's Theorem    Prove .  Now suppose that a group is finite. Show that all of the cosets of a subgroup have the same size.  Prove Lagrange's Theorem, stated below.      Lagrange's Theorem  Lagrange's Theorem  If is a finite group and is a subgroup, then the order of divides the order of .    For part (b), let be cosets. Show that the function given by is a bijection.  "
},
{
  "id": "lagrangeconseqexer",
  "level": "2",
  "url": "subgroups_cosets_section.html#lagrangeconseqexer",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "Consequences of Lagrange’s Theorem.",
  "body": "Consequences of Lagrange's Theorem   Show that the order of any element of a finite group divides the order of the group.  Let be a finite group, and let . Show that .  Show that a group of prime order is cyclic.    "
},
{
  "id": "group_homomorphism_sect",
  "level": "1",
  "url": "group_homomorphism_sect.html",
  "type": "Section",
  "number": "2.4",
  "title": "Group homomorphisms",
  "body": " Group homomorphisms    Group homomorphism  homomorphism of groups  isomorphism of groups  group is isomorphic to group  Let be groups. A map is called a homomorphism if for all in . A homomorphism that is both injective (one-to-one) and surjective (onto) is called an isomorphism of groups. If is an isomorphism, we say that is isomorphic to , and we write .     Show that each of the following are homomorphisms.  given by  given by , some fixed  , any group, given by , some fixed  given by  Show that each of the following are not homomorphisms. In each case, demonstrate what fails.  given by  given by  given by      Kernel of a group homomorphism  kernel of a group homomorphism   Let be a group homomorphism, and let be the identity element for . We write to denote the set called the kernel of .    Find the kernel of each of the following homomorphisms.  given by  given by  , any group, given by , some fixed                Basic properties of homomorphisms   Let be a homomorphism of groups. Let denote the identity elements of , respectively. We have the following.  (identity goes to identity)  (inverses go to inverses) for all  is a subgroup of  is a subgroup of  (preimage sets are cosets of the kernel) if and only if  if and only if  is one-to-one if and only if       is a group if and only if is a kernel  cosets of a normal subgroup   Let be a subgroup of a group . The set of cosets of forms a group, called a quotient group quotient group (or factor group factor group ), under the operation if and only if is the kernel of a homomorphism for some group .    (First Isomorphism Theorem)  First Isomorphism Theorem   Let be a homomorphism of groups. Then is isomorphic to via the map .     normal subgroup      is a normal subgroup of    Normal subgroup   A subgroup of a group is called normal if for every , . We write to indicate that is a normal subgroup of .     Characterization of normal subgroups   Let be a subgroup of a group . The following are equivalent.  is the kernel of some group homomorphism  is a group with multiplication given by Equation  is a normal subgroup of        Basic properties of homomorphisms  Prove .   Prove Properties 1 and 2.     Prove Properties 3 and 4.     Prove Properties 5, 6, and 7.   Use .    Show that the inverse of an isomorphism is an isomorphism.     Proof of the First Isomorphism Theorem   Prove .  First, suppose for some homomorphism . Explain why of can be rephrased to say that there is a one-to-one correspondence given by . Now use the bijection to impose the group structure of ( of ) on . Conversely, if is a group with the group operation , define by , then check that is a homomorphism and that .    Prove by explicitly showing how it follows from the proof of outlined in .    Let be relatively prime positive integers. Show that the map given by is an isomorphism.  Use the fact that is the least positive integer of the form over all integers (see ). Use this to solve when are relatively prime.    Another construction of  Let be an integer and let . Let be given by .  Show that the the image of is the group of th roots of unity.  Show that is a homomorphism, and that the kernel of is the set .  Conclude that is isomorphic to the group of -th roots of unity.      Isomorphic images of generators are generators Let be a subset of a group . Let be an isomorphism of groups, and let . Show that .    Conjugation Let be a group, let be an element of , and let be given by . The map is called conjugation by the element  conjugation by a group element and the elements are said to be conjugate to one another.   Show that is an isomorphism of with itself.    Show that is conjugate to is an equivalence relation. That is, consider the relation on given by if for some . Show that this is an equivalence relation.      Isomorphism induces an equivalence relation  Prove that is isomorphic to is an equivalence relation on groups. That is, consider the relation on the set of all groups, given by if there exists a group isomorphism . Show that this is an equivalence relation.     Characterization of normal subgroups  Prove . That is equivalent to is established by .   Show that implies .    Show that implies . The messy part of this proof is to show that multiplication of cosets is well-defined. This means you start by supposing that and , then show that .   Further characterizations of normal subgroups  Show that is equivalent to the following conditions.  for all  for all         Automorphisms  Let be a group. An automorphism group automorphism  inner automorphism  automorphism group of is an isomorphism from to itself. The set of all automorphisms of is denoted  the group of automorphisms of a group   .   Show that is a group under the operation of function composition.    Show that  group of inner automorphisms of a group   is a subgroup of . (The group is called the group of inner automorphisms inner automorphism group of .)    Find an example of an automorphism of a group that is not an inner automorphism.        "
},
{
  "id": "group_homomorphism_sect-2",
  "level": "2",
  "url": "group_homomorphism_sect.html#group_homomorphism_sect-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homomorphism isomorphism isomorphic "
},
{
  "id": "homismdefegexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#homismdefegexer",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "",
  "body": " Show that each of the following are homomorphisms.  given by  given by , some fixed  , any group, given by , some fixed  given by  Show that each of the following are not homomorphisms. In each case, demonstrate what fails.  given by  given by  given by    "
},
{
  "id": "group_homomorphism_sect-4",
  "level": "2",
  "url": "group_homomorphism_sect.html#group_homomorphism_sect-4",
  "type": "Definition",
  "number": "2.4.3",
  "title": "Kernel of a group homomorphism.",
  "body": " Kernel of a group homomorphism  kernel of a group homomorphism   Let be a group homomorphism, and let be the identity element for . We write to denote the set called the kernel of .  "
},
{
  "id": "kerneldefegexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#kerneldefegexer",
  "type": "Checkpoint",
  "number": "2.4.4",
  "title": "",
  "body": " Find the kernel of each of the following homomorphisms.  given by  given by  , any group, given by , some fixed              "
},
{
  "id": "homismbasicproperties",
  "level": "2",
  "url": "group_homomorphism_sect.html#homismbasicproperties",
  "type": "Proposition",
  "number": "2.4.5",
  "title": "Basic properties of homomorphisms.",
  "body": " Basic properties of homomorphisms   Let be a homomorphism of groups. Let denote the identity elements of , respectively. We have the following.  (identity goes to identity)  (inverses go to inverses) for all  is a subgroup of  is a subgroup of  (preimage sets are cosets of the kernel) if and only if  if and only if  is one-to-one if and only if     "
},
{
  "id": "gmodkisgroup",
  "level": "2",
  "url": "group_homomorphism_sect.html#gmodkisgroup",
  "type": "Proposition",
  "number": "2.4.6",
  "title": "<span class=\"process-math\">\\(G\/K\\)<\/span> is a group if and only if <span class=\"process-math\">\\(K\\)<\/span> is a kernel.",
  "body": " is a group if and only if is a kernel  cosets of a normal subgroup   Let be a subgroup of a group . The set of cosets of forms a group, called a quotient group quotient group (or factor group factor group ), under the operation if and only if is the kernel of a homomorphism for some group .   "
},
{
  "id": "firstisothm",
  "level": "2",
  "url": "group_homomorphism_sect.html#firstisothm",
  "type": "Corollary",
  "number": "2.4.7",
  "title": "(First Isomorphism Theorem).",
  "body": "(First Isomorphism Theorem)  First Isomorphism Theorem   Let be a homomorphism of groups. Then is isomorphic to via the map .   "
},
{
  "id": "normalsubgroupdefn",
  "level": "2",
  "url": "group_homomorphism_sect.html#normalsubgroupdefn",
  "type": "Definition",
  "number": "2.4.8",
  "title": "Normal subgroup.",
  "body": " normal subgroup      is a normal subgroup of    Normal subgroup   A subgroup of a group is called normal if for every , . We write to indicate that is a normal subgroup of .   "
},
{
  "id": "normalsubgroupcharacterization",
  "level": "2",
  "url": "group_homomorphism_sect.html#normalsubgroupcharacterization",
  "type": "Proposition",
  "number": "2.4.9",
  "title": "Characterization of normal subgroups.",
  "body": " Characterization of normal subgroups   Let be a subgroup of a group . The following are equivalent.  is the kernel of some group homomorphism  is a group with multiplication given by Equation  is a normal subgroup of     "
},
{
  "id": "homismbasicpart1exer",
  "level": "2",
  "url": "group_homomorphism_sect.html#homismbasicpart1exer",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": " Prove Properties 1 and 2.   "
},
{
  "id": "homismbasicpart2exer",
  "level": "2",
  "url": "group_homomorphism_sect.html#homismbasicpart2exer",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": " Prove Properties 3 and 4.   "
},
{
  "id": "homismbasicpart3exer",
  "level": "2",
  "url": "group_homomorphism_sect.html#homismbasicpart3exer",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": " Prove Properties 5, 6, and 7.   Use .  "
},
{
  "id": "isoinvisisoexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#isoinvisisoexer",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "Show that the inverse of an isomorphism is an isomorphism.  "
},
{
  "id": "gmodkisgroupexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#gmodkisgroupexer",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "",
  "body": " Prove .  First, suppose for some homomorphism . Explain why of can be rephrased to say that there is a one-to-one correspondence given by . Now use the bijection to impose the group structure of ( of ) on . Conversely, if is a group with the group operation , define by , then check that is a homomorphism and that .  "
},
{
  "id": "firstisothmexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#firstisothmexer",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "",
  "body": " Prove by explicitly showing how it follows from the proof of outlined in .  "
},
{
  "id": "autznexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#autznexer",
  "type": "Exercise",
  "number": "2.4.7",
  "title": "",
  "body": "Let be relatively prime positive integers. Show that the map given by is an isomorphism.  Use the fact that is the least positive integer of the form over all integers (see ). Use this to solve when are relatively prime.  "
},
{
  "id": "zmodnascnexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#zmodnascnexer",
  "type": "Exercise",
  "number": "2.4.8",
  "title": "Another construction of <span class=\"process-math\">\\(\\Z_n\\)<\/span>.",
  "body": "Another construction of  Let be an integer and let . Let be given by .  Show that the the image of is the group of th roots of unity.  Show that is a homomorphism, and that the kernel of is the set .  Conclude that is isomorphic to the group of -th roots of unity.    "
},
{
  "id": "isogen2genexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#isogen2genexer",
  "type": "Exercise",
  "number": "2.4.9",
  "title": "Isomorphic images of generators are generators.",
  "body": "Isomorphic images of generators are generators Let be a subset of a group . Let be an isomorphism of groups, and let . Show that .  "
},
{
  "id": "conjugationexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#conjugationexer",
  "type": "Exercise",
  "number": "2.4.10",
  "title": "Conjugation.",
  "body": "Conjugation Let be a group, let be an element of , and let be given by . The map is called conjugation by the element  conjugation by a group element and the elements are said to be conjugate to one another.   Show that is an isomorphism of with itself.    Show that is conjugate to is an equivalence relation. That is, consider the relation on given by if for some . Show that this is an equivalence relation.    "
},
{
  "id": "isoisequivrel",
  "level": "2",
  "url": "group_homomorphism_sect.html#isoisequivrel",
  "type": "Exercise",
  "number": "2.4.11",
  "title": "Isomorphism induces an equivalence relation.",
  "body": "Isomorphism induces an equivalence relation  Prove that is isomorphic to is an equivalence relation on groups. That is, consider the relation on the set of all groups, given by if there exists a group isomorphism . Show that this is an equivalence relation.  "
},
{
  "id": "oneimpliesthree",
  "level": "2",
  "url": "group_homomorphism_sect.html#oneimpliesthree",
  "type": "Exercise",
  "number": "2.4.12",
  "title": "",
  "body": " Show that implies .  "
},
{
  "id": "threeimpliestwo",
  "level": "2",
  "url": "group_homomorphism_sect.html#threeimpliestwo",
  "type": "Exercise",
  "number": "2.4.13",
  "title": "",
  "body": " Show that implies . The messy part of this proof is to show that multiplication of cosets is well-defined. This means you start by supposing that and , then show that .  "
},
{
  "id": "morenormalcharexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#morenormalcharexer",
  "type": "Exercise",
  "number": "2.4.14",
  "title": "Further characterizations of normal subgroups.",
  "body": "Further characterizations of normal subgroups  Show that is equivalent to the following conditions.  for all  for all    "
},
{
  "id": "automorphismexer",
  "level": "2",
  "url": "group_homomorphism_sect.html#automorphismexer",
  "type": "Exercise",
  "number": "2.4.15",
  "title": "Automorphisms.",
  "body": "Automorphisms  Let be a group. An automorphism group automorphism  inner automorphism  automorphism group of is an isomorphism from to itself. The set of all automorphisms of is denoted  the group of automorphisms of a group   .   Show that is a group under the operation of function composition.    Show that  group of inner automorphisms of a group   is a subgroup of . (The group is called the group of inner automorphisms inner automorphism group of .)    Find an example of an automorphism of a group that is not an inner automorphism.     "
},
{
  "id": "group_action_sect",
  "level": "1",
  "url": "group_action_sect.html",
  "type": "Section",
  "number": "2.5",
  "title": "Group actions",
  "body": " Group actions   Group action, orbit, stabilizer  group action  group action orbit of an element under a group action  group action stabilizer of an element under a group action  action of a group on a set isotropy subgroup  group action -space   orbit of under a group action   stabilizer of an element under a group action   Let be a group and let be a set. An action of the group on the set is a group homomorphism We say that the group  acts on the set , and we call a -space . For and , we write to denote . Other notations for are , , and . We write to denote the set called the orbit of , and we write to denote the set called the stabilizer or isotropy subgroup It must be proved that is indeed a subgroup of . See below. of . A group action is transitive transitive group action action of a group on a set  transitive group action  if there is only one orbit. A group action is faithful faithful group action group action  faithful group action  if the map has a trivial kernel.     Find the indicated orbits and stabilizers for each of the following group actions.  acts on the square by rotations and reflections. What is the orbit of ? What is the orbit of ? What is the stabilizer of ? What is the stabilizer of ?  The circle group (see ) acts on the two-sphere by rotation about the -axis. Given an element in a point in (in spherical coordinates), the action is given by What is the orbit of ? What is the orbit of the north pole ? What is the stabilizer of ? What is the stabilizer of the north pole?   Any group acts on itself by conjugation , that is, by (see ). Describe the orbit and stabilizer of a group element .       , , ,   is the horizontal circle on with latitude  , , ,    , the stabilizer of is the centralizer subgroup (see )    Show that the stabilizer of an element in a -space is a subgroup of .      set of orbits of the action of group on set  Orbit space   We write to denote the set of orbits of the group acting on a set . The set is also called the orbit space group action orbit space  of the group action.    Describe for each of the three group actions in .      Let group act on set . Let denote the relation on given by if and only if for some . Then we have that is an equivalence relation, and further, we have if and only if . In other words, we have In particular, we have that the orbit space is a partition of .    The Orbit-Stabilizer Theorem Orbit-Stabilizer Theorem action of a group on a set  Orbit-Stabilizer Theorem   Let be a group acting on a set , and let be an element of . There is a one-to-one correspondence given by    The sign of a permutation In this exercise we establish a function , called the sign function permutation  sign function  . We start by defining an action of the symmetric group on a set of two polynomials. Let be the polynomial in the variables . Let be the set . Given a permutation in , let be the polynomial and let . In the exercises below, you will show that for all in . This allows us to define the sign of a permutation to be or according to whether or , respectively. We say that a permutation is even permutation even permutation  if , and we say is odd permutation odd permutation  if .  Write out for variables without using the product notation symbol .  Continuing with , write out and . In both cases, match the factors with and identify which factors experience a sign change. Use this calculation to find and directly and explicitly from the definition.  Show that for all in .  Show that for any transposition in .  Show that given by is a group action.  Use the group action property to explain why for all in . In other words, the sign function is a homomorphism of groups .  Conclude that, if is expressible as a product of an even number of transpositions, then is an even permutation, and that any product of transpositions that equals must have an even number of transpositions. (A similar statement holds replacing the word even by the word odd .)  The subset of even permutations of is denoted . Give two arguments why is a normal subgroup of . Use (i) the 1-step or the 2-step subgroup test and definition , and (ii) using criterion 1 of . This group is called the alternating group alternating group groups, list of alternating group  the alternating group .     Actions of a group on itself Let be a group. Here are three actions of on itself. Left multiplication left multiplication is given by where is given by . Right inverse multiplication is given by where is given by . Conjugation is given by where is given by .  Show that, for , the maps are elements of .  Show that each of these maps is indeed a group action.  Show that the map is injective, so that .    Consequence of this exercise: Every group is isomorphic to a subgroup of a permutation group.    Cosets, revisited Let be a subgroup of a group , and consider the map given by , where (this is the restriction of right inverse multiplication action in to ). Show that the orbits of this action of on are the same as the cosets of . This shows that the two potentially different meanings of (one is the set of cosets, the other is the set of orbits of the action of on via ), are in fact in agreement.     The natural action of a matrix group on a vector space Let be a group whose elements are matrices with entries in a field and with the group operation of matrix multiplication. The natural action  of on the vector space is given by where the dot in the expression is ordinary multiplication of a matrix times a column vector. Show that this is indeed a group action.    Prove .  Show that is an equivalence relation.  Show that if and only if .  Explain why is a partition of .       Prove The Orbit-Stabilizer Theorem ( ).    The projective linear group action on projective space Let be a vector space over a field (in this course, the base field is either the real numbers or the complex numbers ). The group of nonzero elements in acts on the set of nonzero elements in by scalar multiplication, that is, by the map . The set of orbits is called the projectivization of , or simply projective space projective space , and is denoted  projective space    Let denote the equivalence relation that defines the orbits . Verify that is given by if and only if for some .  Verify that the group (the group of invertible linear transformations of ) acts on by for and .  Show that the kernel of the map given by is the subgroup .  Conclude that the projective linear group  projective linear group  groups, list of projective linear group    the projective linear group  acts on .  Show that acts on by , and that .   Let denote the stereographic projection (see ). Show that the map given by if and given by if is well-defined and is a bijection.      "
},
{
  "id": "group_action_sect-2",
  "level": "2",
  "url": "group_action_sect.html#group_action_sect-2",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Group action, orbit, stabilizer.",
  "body": " Group action, orbit, stabilizer  group action  group action orbit of an element under a group action  group action stabilizer of an element under a group action  action of a group on a set isotropy subgroup  group action -space   orbit of under a group action   stabilizer of an element under a group action   Let be a group and let be a set. An action of the group on the set is a group homomorphism We say that the group  acts on the set , and we call a -space . For and , we write to denote . Other notations for are , , and . We write to denote the set called the orbit of , and we write to denote the set called the stabilizer or isotropy subgroup It must be proved that is indeed a subgroup of . See below. of . A group action is transitive transitive group action action of a group on a set  transitive group action  if there is only one orbit. A group action is faithful faithful group action group action  faithful group action  if the map has a trivial kernel.   "
},
{
  "id": "actionegexer",
  "level": "2",
  "url": "group_action_sect.html#actionegexer",
  "type": "Checkpoint",
  "number": "2.5.2",
  "title": "",
  "body": " Find the indicated orbits and stabilizers for each of the following group actions.  acts on the square by rotations and reflections. What is the orbit of ? What is the orbit of ? What is the stabilizer of ? What is the stabilizer of ?  The circle group (see ) acts on the two-sphere by rotation about the -axis. Given an element in a point in (in spherical coordinates), the action is given by What is the orbit of ? What is the orbit of the north pole ? What is the stabilizer of ? What is the stabilizer of the north pole?   Any group acts on itself by conjugation , that is, by (see ). Describe the orbit and stabilizer of a group element .       , , ,   is the horizontal circle on with latitude  , , ,    , the stabilizer of is the centralizer subgroup (see )   "
},
{
  "id": "showstabisgpexer",
  "level": "2",
  "url": "group_action_sect.html#showstabisgpexer",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "",
  "body": "Show that the stabilizer of an element in a -space is a subgroup of .  "
},
{
  "id": "orbitspacedefn",
  "level": "2",
  "url": "group_action_sect.html#orbitspacedefn",
  "type": "Definition",
  "number": "2.5.4",
  "title": "Orbit space.",
  "body": "  set of orbits of the action of group on set  Orbit space   We write to denote the set of orbits of the group acting on a set . The set is also called the orbit space group action orbit space  of the group action.  "
},
{
  "id": "orbitspaceexer",
  "level": "2",
  "url": "group_action_sect.html#orbitspaceexer",
  "type": "Checkpoint",
  "number": "2.5.5",
  "title": "",
  "body": " Describe for each of the three group actions in .  "
},
{
  "id": "orbitspartition",
  "level": "2",
  "url": "group_action_sect.html#orbitspartition",
  "type": "Proposition",
  "number": "2.5.6",
  "title": "",
  "body": "  Let group act on set . Let denote the relation on given by if and only if for some . Then we have that is an equivalence relation, and further, we have if and only if . In other words, we have In particular, we have that the orbit space is a partition of .   "
},
{
  "id": "orbitstabthm",
  "level": "2",
  "url": "group_action_sect.html#orbitstabthm",
  "type": "Theorem",
  "number": "2.5.7",
  "title": "The Orbit-Stabilizer Theorem.",
  "body": "The Orbit-Stabilizer Theorem Orbit-Stabilizer Theorem action of a group on a set  Orbit-Stabilizer Theorem   Let be a group acting on a set , and let be an element of . There is a one-to-one correspondence given by  "
},
{
  "id": "signofpermexer",
  "level": "2",
  "url": "group_action_sect.html#signofpermexer",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "The sign of a permutation.",
  "body": "The sign of a permutation In this exercise we establish a function , called the sign function permutation  sign function  . We start by defining an action of the symmetric group on a set of two polynomials. Let be the polynomial in the variables . Let be the set . Given a permutation in , let be the polynomial and let . In the exercises below, you will show that for all in . This allows us to define the sign of a permutation to be or according to whether or , respectively. We say that a permutation is even permutation even permutation  if , and we say is odd permutation odd permutation  if .  Write out for variables without using the product notation symbol .  Continuing with , write out and . In both cases, match the factors with and identify which factors experience a sign change. Use this calculation to find and directly and explicitly from the definition.  Show that for all in .  Show that for any transposition in .  Show that given by is a group action.  Use the group action property to explain why for all in . In other words, the sign function is a homomorphism of groups .  Conclude that, if is expressible as a product of an even number of transpositions, then is an even permutation, and that any product of transpositions that equals must have an even number of transpositions. (A similar statement holds replacing the word even by the word odd .)  The subset of even permutations of is denoted . Give two arguments why is a normal subgroup of . Use (i) the 1-step or the 2-step subgroup test and definition , and (ii) using criterion 1 of . This group is called the alternating group alternating group groups, list of alternating group  the alternating group .    "
},
{
  "id": "gpselfactionexer",
  "level": "2",
  "url": "group_action_sect.html#gpselfactionexer",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "Actions of a group on itself.",
  "body": "Actions of a group on itself Let be a group. Here are three actions of on itself. Left multiplication left multiplication is given by where is given by . Right inverse multiplication is given by where is given by . Conjugation is given by where is given by .  Show that, for , the maps are elements of .  Show that each of these maps is indeed a group action.  Show that the map is injective, so that .    Consequence of this exercise: Every group is isomorphic to a subgroup of a permutation group.  "
},
{
  "id": "cosetsrevisitedexer",
  "level": "2",
  "url": "group_action_sect.html#cosetsrevisitedexer",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "Cosets, revisited.",
  "body": "Cosets, revisited Let be a subgroup of a group , and consider the map given by , where (this is the restriction of right inverse multiplication action in to ). Show that the orbits of this action of on are the same as the cosets of . This shows that the two potentially different meanings of (one is the set of cosets, the other is the set of orbits of the action of on via ), are in fact in agreement.   "
},
{
  "id": "gpactonvectspaceexer",
  "level": "2",
  "url": "group_action_sect.html#gpactonvectspaceexer",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "The natural action of a matrix group on a vector space.",
  "body": "The natural action of a matrix group on a vector space Let be a group whose elements are matrices with entries in a field and with the group operation of matrix multiplication. The natural action  of on the vector space is given by where the dot in the expression is ordinary multiplication of a matrix times a column vector. Show that this is indeed a group action.  "
},
{
  "id": "orbitspartitionexer",
  "level": "2",
  "url": "group_action_sect.html#orbitspartitionexer",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": "Prove .  Show that is an equivalence relation.  Show that if and only if .  Explain why is a partition of .    "
},
{
  "id": "orbitstabthmpfexer",
  "level": "2",
  "url": "group_action_sect.html#orbitstabthmpfexer",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": " Prove The Orbit-Stabilizer Theorem ( ).  "
},
{
  "id": "projspaceandgroupexer",
  "level": "2",
  "url": "group_action_sect.html#projspaceandgroupexer",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "The projective linear group action on projective space.",
  "body": "The projective linear group action on projective space Let be a vector space over a field (in this course, the base field is either the real numbers or the complex numbers ). The group of nonzero elements in acts on the set of nonzero elements in by scalar multiplication, that is, by the map . The set of orbits is called the projectivization of , or simply projective space projective space , and is denoted  projective space    Let denote the equivalence relation that defines the orbits . Verify that is given by if and only if for some .  Verify that the group (the group of invertible linear transformations of ) acts on by for and .  Show that the kernel of the map given by is the subgroup .  Conclude that the projective linear group  projective linear group  groups, list of projective linear group    the projective linear group  acts on .  Show that acts on by , and that .   Let denote the stereographic projection (see ). Show that the map given by if and given by if is well-defined and is a bijection.   "
},
{
  "id": "groups_extra_exer_section",
  "level": "1",
  "url": "groups_extra_exer_section.html",
  "type": "Section",
  "number": "2.6",
  "title": "Additional exercises",
  "body": " Additional exercises   The group of units in  Let denote the set of elements in that have multiplicative inverses, that is,   Show that is in if and only if is relatively prime to .  Show that with the binary operation of multiplication mod is an Abelian group.  Show that is isomorphic to via .     Terminology: The group  group of units in   is called the the group of (multiplicative) units group of units in groups, list of  group of units in  in . The function , important in number theory, is called the Euler phi function Euler phi function , written .     Fermat's Little Theorem Fermat's Little Theorem  For every integer and every prime , we have . First, reduce mod , that is, write with . Now consider two cases. The case is trivial. If , apply the fact (see ) to the group .    An alternative approach to parity of permutations  This exercise gives a way to define even and odd permutations that is different from the method used in . Suppose that the identity permutation in is written as a product of transpositions Show that is even.  Suppose that in is written in two ways as a product of transpositions. Show that are either both even or both odd. The common evenness or oddness of is called the parity of the permutation .  Show that the parity of a -cycle is even if is odd, and the parity of a -cycle is odd if is even.    Consider the two rightmost transpositions . They have one of the following forms, where are distinct. The first allows you to reduce the transposition count by two by cancelling. The remaining three can be rewritten. Notice that the index of the rightmost transposition in which the symbol occurs has been reduced by 1 (from to ). Finish this reasoning with an inductive argument.     The size of the alternating group Show that for , that is, that half of the elements of are even, and half are odd.    The order of a permutation Let be written as a product of disjoint cycles. Show that the order is the least common multiple of the lengths of those disjoint cycles.      Alternative approach to multiplication in a factor group Given subsets of a group , define the set by Now suppose that is a subgroup of . Show that for all in if and only if is a normal subgroup of .    Semidirect product semidirect product of groups Let be groups, and let be a homomorphism. The semidirect product , denoted , or if is understood, is the set consisting of all pairs with , The notation is understood to be the direct product group, so we do not write use the Cartesian product notation to describe semidirect product, to avoid confusion, even though the underlying set for the direct product and the semidirect product are in fact the same Cartesian product . with the group multiplication operation given by Two examples demonstrate why this is a useful construction. The dihedral group is (isomorphic to) the semidirect product , where is the cyclic group generated by the rotation (rotation by of a revolution) and is the two-element group generated by any reflection in . The map is given by . The Euclidean group of congruence transformations of the plane is (isomorphic to) the group , where is the additive group of column vectors with real entries, and is the group of real orthogonal matrices. The map is given by , that is to say, the natural action of on . [The Euclidean group element acts on the point by .]  Do all the necessary details to show that is indeed a group.  (Characterization of semidirect products) Suppose that are subgroups of a group . Let . Suppose that is a normal subgroup of , that , and that . Show that , given by , is a homomorphism. Show that , given by , is an isomorphism.  Show that , as described above.  Show that the following requirement holds for the Euclidean group action. We have for all and .  Suppose that is the trivial homomorphism (that is, is the identity homomorphism on , for all ). Show that in this case.      Group action on functions on a -space  Suppose that a group acts on a set . Let denote the set of functions from to some set . Show that the formula defines an action of on , where , , and .     "
},
{
  "id": "unitsinzngpexer",
  "level": "2",
  "url": "groups_extra_exer_section.html#unitsinzngpexer",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "The group of units in <span class=\"process-math\">\\(\\Z_n\\)<\/span>.",
  "body": "The group of units in  Let denote the set of elements in that have multiplicative inverses, that is,   Show that is in if and only if is relatively prime to .  Show that with the binary operation of multiplication mod is an Abelian group.  Show that is isomorphic to via .     Terminology: The group  group of units in   is called the the group of (multiplicative) units group of units in groups, list of  group of units in  in . The function , important in number theory, is called the Euler phi function Euler phi function , written .  "
},
{
  "id": "fermatslittlethmexer",
  "level": "2",
  "url": "groups_extra_exer_section.html#fermatslittlethmexer",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "<dfn class=\"terminology\">Fermat’s Little Theorem<\/dfn>.",
  "body": "Fermat's Little Theorem Fermat's Little Theorem  For every integer and every prime , we have . First, reduce mod , that is, write with . Now consider two cases. The case is trivial. If , apply the fact (see ) to the group .  "
},
{
  "id": "permparityexer",
  "level": "2",
  "url": "groups_extra_exer_section.html#permparityexer",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "An alternative approach to parity of permutations.",
  "body": "An alternative approach to parity of permutations  This exercise gives a way to define even and odd permutations that is different from the method used in . Suppose that the identity permutation in is written as a product of transpositions Show that is even.  Suppose that in is written in two ways as a product of transpositions. Show that are either both even or both odd. The common evenness or oddness of is called the parity of the permutation .  Show that the parity of a -cycle is even if is odd, and the parity of a -cycle is odd if is even.    Consider the two rightmost transpositions . They have one of the following forms, where are distinct. The first allows you to reduce the transposition count by two by cancelling. The remaining three can be rewritten. Notice that the index of the rightmost transposition in which the symbol occurs has been reduced by 1 (from to ). Finish this reasoning with an inductive argument.    "
},
{
  "id": "alternatinggpsizeexer",
  "level": "2",
  "url": "groups_extra_exer_section.html#alternatinggpsizeexer",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "The size of the alternating group.",
  "body": "The size of the alternating group Show that for , that is, that half of the elements of are even, and half are odd.  "
},
{
  "id": "orderofapermexer",
  "level": "2",
  "url": "groups_extra_exer_section.html#orderofapermexer",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "The order of a permutation.",
  "body": "The order of a permutation Let be written as a product of disjoint cycles. Show that the order is the least common multiple of the lengths of those disjoint cycles.  "
},
{
  "id": "alt_factor_gp_mult_exer",
  "level": "2",
  "url": "groups_extra_exer_section.html#alt_factor_gp_mult_exer",
  "type": "Exercise",
  "number": "2.6.6",
  "title": "Alternative approach to multiplication in a factor group.",
  "body": "Alternative approach to multiplication in a factor group Given subsets of a group , define the set by Now suppose that is a subgroup of . Show that for all in if and only if is a normal subgroup of .  "
},
{
  "id": "semidirect_product_exer",
  "level": "2",
  "url": "groups_extra_exer_section.html#semidirect_product_exer",
  "type": "Exercise",
  "number": "2.6.7",
  "title": "Semidirect product.",
  "body": "Semidirect product semidirect product of groups Let be groups, and let be a homomorphism. The semidirect product , denoted , or if is understood, is the set consisting of all pairs with , The notation is understood to be the direct product group, so we do not write use the Cartesian product notation to describe semidirect product, to avoid confusion, even though the underlying set for the direct product and the semidirect product are in fact the same Cartesian product . with the group multiplication operation given by Two examples demonstrate why this is a useful construction. The dihedral group is (isomorphic to) the semidirect product , where is the cyclic group generated by the rotation (rotation by of a revolution) and is the two-element group generated by any reflection in . The map is given by . The Euclidean group of congruence transformations of the plane is (isomorphic to) the group , where is the additive group of column vectors with real entries, and is the group of real orthogonal matrices. The map is given by , that is to say, the natural action of on . [The Euclidean group element acts on the point by .]  Do all the necessary details to show that is indeed a group.  (Characterization of semidirect products) Suppose that are subgroups of a group . Let . Suppose that is a normal subgroup of , that , and that . Show that , given by , is a homomorphism. Show that , given by , is an isomorphism.  Show that , as described above.  Show that the following requirement holds for the Euclidean group action. We have for all and .  Suppose that is the trivial homomorphism (that is, is the identity homomorphism on , for all ). Show that in this case.    "
},
{
  "id": "gpactonfunspaceexer",
  "level": "2",
  "url": "groups_extra_exer_section.html#gpactonfunspaceexer",
  "type": "Exercise",
  "number": "2.6.8",
  "title": "Group action on functions on a <span class=\"process-math\">\\(G\\)<\/span>-space.",
  "body": "Group action on functions on a -space  Suppose that a group acts on a set . Let denote the set of functions from to some set . Show that the formula defines an action of on , where , , and .  "
},
{
  "id": "geomdefsect",
  "level": "1",
  "url": "geomdefsect.html",
  "type": "Section",
  "number": "3.1",
  "title": "Geometries and models",
  "body": " Geometries and models   An integral part of the modern understanding of geometry is the concept of congruence transformation , or simply symmetry . The symmetries of a geometric space preserve inherent properties of figures, such as distance, angle, and area. In his 1872 work called the Erlanger Programm , The German term Erlanger Programm (or Erlangen program in English) is named after the city Erlangen, where Klein worked at the university. Felix Klein unified the study of a wide variety of geometric spaces by overtly placing the group of congruence transformations as part of the structure of a geometry. The following is a version of Klein's definition of geometry.    A geometry geometry is a pair , where is a set, called the (model) space model space , and is a group, called the group of congruence transformations congruence transformations , that acts on . Subsets of are called figures figure . Figures are called congruent congruent if there is an element in such that . We write  figure is congruent to figure to denote that figures are congruent.   Note on terminology and notation: throughout this chapter on geometry, the term transformation will always mean a one-to-one and onto map of a space to itself. Given a geometry with group action , we will abuse notation and write to denote the map for an element in . It is common usage to say the transformation to mean the transformation of the space .   Show that congruence is an equivalence relation on the set of figures in a geometry.    Examples of geometries    Planar Euclidean geometry Euclidean planar geometry geometries, list of Euclidean planar geometry  . The model space for planar Euclidean geometry is the plane . The group of congruence transformations consists of translations, rotations, reflections, and their compositions. Specifically, Euclidean congruences are functions of the form , where , is an element of the group of orthogonal matrices, and .  Spherical geometry. spherical geometry geometries, list of spherical geometry spherical geometry The model space for spherical geometry is the sphere . The group of congruence transformations consists of rotations of the sphere and reflections across planes through the origin. Specifically, spherical congruences are functions of the form , where , , and is an element of the group of orthogonal matrices.  Projective geometry. projective geometry geometries, list of projective geometry  The model space for a projective geometry is projective space , where is a vector space (see in the previous chapter). The group of congruence transformations is the projective linear group .     Planar geometries  Much of this chapter on geometry is devoted to a family of planar geometries whose model spaces are the extended complex plane (described in section ) and some of its subsets. One of the properties shared by the congruence transformations in all of these planar geometries is conformality , or angle preservation. To say that a transformation is conformal conformal transformation means that if two curves and make an oriented angle at a point of intersection, then the two image curves and also make the same oriented angle at the point of intersection (the angle made by two curves is the angle made by their tangents at the point of intersection). See . examines the conformal properties of the four basic types of complex functions summarized in .  Conformal maps preserve oriented angles    homothety   Basic types of transformations     homothety      rotation      translation      inversion         Remark on convention: If and if we write , this implies that we mean that is real and positive. This remark pertains to the definition of homothety Some texts define homothety to mean that can be any nonzero real scalar. We follow the convention from complex analysis that restricts homotheties to positive real scalars. For example, see . in above, and in the classification of normal forms, summarized in in the next section.   Subgeometries and equivalent geometries   Subgeometry We say that a geometry is a subgeometry subgeometry  of a geometry if is a subset of and is a subgroup of and the action of on is compatible with the action of on in the sense that has the same value in both geometries and for all .      Equivalent geometries  Geometries and are equivalent equivalent geometries  if there is a bijective map such that every element of has a conjugate transformation in and every element of has a conjugate transformation in . In symbols: See the note on terminology at the beginning of this section: the equation below really means , where are the actions of on and on , respectively.   for every , there is an such that , and  for every , there is a such that .  Equivalent geometries are said to be models of the same geometry.      Note on terminology: the term geometry is used to refer to a specific model as in definition , and also to refer to an equivalence class of geometries. This is similar to the situation for groups, where the term the cyclic group of order can refer to additive group , or the multiplicative group of th complex roots of unity, or simply the isomorphism class of these groups.     Warm up exercises with the three example geometries  Find the Euclidean congruence transformation that takes the triangle with vertices to the triangle with vertices .  Find all possible spherical congruences that take the three points to the three points (in that order). One of these is a rotation: find an axis and angle for that rotation.  Find the projective transformation in that takes the three points in to (in that order).  Find formulas for the composition of two Euclidean transformations and the inverse of a Euclidean transformation.  Let denote the distance between points in Euclidean geometry, and let be a Euclidean congruence transformation. Show that .       The angle between tangents to curves as a limit of secant approximations    Angles and conformal transformations.   The complex plane comes with a built-in measure of oriented angle. If is a positive real number, , and is a complex number, the measure of the oriented angle is . More generally, if are three complex numbers with distinct from and , the measure of the oriented angle is    Use the fact that rotations and translations are conformal to prove .   Use to prove that homotheties are conformal.   Now suppose two curves intersect at , let be a point on and let be a point on . If and are close to , then is a secant approximation of an angle made by the tangents to at . See . Now let be parameterizations of , respectively, with , and , for some . We can compute an angle made by the tangents to the curves by the following limit. The value of limit is sensitive to the direction of the curve parameterizations and the sided-ness of the limits or . If the value of the limit is for one set of choices for parameterizations and sided-ness, the limit for the other choices will be or . For a given pair of parameterizations , draw a sketch to illustrate the four possible cases .    Use and to prove that inversion is conformal.    Equivalent geometries.  Show that the definition of equivalence of geometries actually defines an equivalence relation on geometries.   Let denote the set of Euclidean congruence transformations given above in . Let denote the set of complex functions that can be written as compositions of the following three types.  for some  for some     Show that the geometries and are equivalent.   Suppose that and are equivalent geometries. Is it necessarily the case that and are isomorphic groups? If yes, give a proof. If no, give a counterexample.        "
},
{
  "id": "geomdefsect-2-2",
  "level": "2",
  "url": "geomdefsect.html#geomdefsect-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometry (model) space congruence transformations figures congruent "
},
{
  "id": "congruenceisequivrelexer",
  "level": "2",
  "url": "geomdefsect.html#congruenceisequivrelexer",
  "type": "Checkpoint",
  "number": "3.1.2",
  "title": "",
  "body": "Show that congruence is an equivalence relation on the set of figures in a geometry.  "
},
{
  "id": "geomexamples-2",
  "level": "2",
  "url": "geomdefsect.html#geomexamples-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Planar Euclidean geometry Spherical geometry. Projective geometry. "
},
{
  "id": "geomdefsect-5-2",
  "level": "2",
  "url": "geomdefsect.html#geomdefsect-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conformal homothety rotation translation inversion "
},
{
  "id": "geomdefsect-6-2",
  "level": "2",
  "url": "geomdefsect.html#geomdefsect-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subgeometry "
},
{
  "id": "geomdefsect-6-3",
  "level": "2",
  "url": "geomdefsect.html#geomdefsect-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "geomdefwarmupexer",
  "level": "2",
  "url": "geomdefsect.html#geomdefwarmupexer",
  "type": "Exercise",
  "number": "3.1.4.1",
  "title": "Warm up exercises with the three example geometries.",
  "body": "Warm up exercises with the three example geometries  Find the Euclidean congruence transformation that takes the triangle with vertices to the triangle with vertices .  Find all possible spherical congruences that take the three points to the three points (in that order). One of these is a rotation: find an axis and angle for that rotation.  Find the projective transformation in that takes the three points in to (in that order).  Find formulas for the composition of two Euclidean transformations and the inverse of a Euclidean transformation.  Let denote the distance between points in Euclidean geometry, and let be a Euclidean congruence transformation. Show that .    "
},
{
  "id": "curve_angle_limit_fig",
  "level": "2",
  "url": "geomdefsect.html#curve_angle_limit_fig",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": " The angle between tangents to curves as a limit of secant approximations   "
},
{
  "id": "anglemeascomplexexer",
  "level": "2",
  "url": "geomdefsect.html#anglemeascomplexexer",
  "type": "Exercise",
  "number": "3.1.4.2",
  "title": "",
  "body": "Use the fact that rotations and translations are conformal to prove .  "
},
{
  "id": "homothetyconformalexer",
  "level": "2",
  "url": "geomdefsect.html#homothetyconformalexer",
  "type": "Exercise",
  "number": "3.1.4.3",
  "title": "",
  "body": "Use to prove that homotheties are conformal.  "
},
{
  "id": "twocurveangleexer",
  "level": "2",
  "url": "geomdefsect.html#twocurveangleexer",
  "type": "Exercise",
  "number": "3.1.4.4",
  "title": "",
  "body": "Now suppose two curves intersect at , let be a point on and let be a point on . If and are close to , then is a secant approximation of an angle made by the tangents to at . See . Now let be parameterizations of , respectively, with , and , for some . We can compute an angle made by the tangents to the curves by the following limit. The value of limit is sensitive to the direction of the curve parameterizations and the sided-ness of the limits or . If the value of the limit is for one set of choices for parameterizations and sided-ness, the limit for the other choices will be or . For a given pair of parameterizations , draw a sketch to illustrate the four possible cases .  "
},
{
  "id": "inversionconformalexer",
  "level": "2",
  "url": "geomdefsect.html#inversionconformalexer",
  "type": "Exercise",
  "number": "3.1.4.5",
  "title": "",
  "body": " Use and to prove that inversion is conformal.  "
},
{
  "id": "equivgeomdefexer",
  "level": "2",
  "url": "geomdefsect.html#equivgeomdefexer",
  "type": "Exercise",
  "number": "3.1.4.6",
  "title": "",
  "body": "Show that the definition of equivalence of geometries actually defines an equivalence relation on geometries.  "
},
{
  "id": "equiveuclideangeomexer",
  "level": "2",
  "url": "geomdefsect.html#equiveuclideangeomexer",
  "type": "Exercise",
  "number": "3.1.4.7",
  "title": "",
  "body": "Let denote the set of Euclidean congruence transformations given above in . Let denote the set of complex functions that can be written as compositions of the following three types.  for some  for some     Show that the geometries and are equivalent.  "
},
{
  "id": "equivgeomgrpsisoquestionexer",
  "level": "2",
  "url": "geomdefsect.html#equivgeomgrpsisoquestionexer",
  "type": "Exercise",
  "number": "3.1.4.8",
  "title": "",
  "body": "Suppose that and are equivalent geometries. Is it necessarily the case that and are isomorphic groups? If yes, give a proof. If no, give a counterexample.  "
},
{
  "id": "mobiusgeomsect",
  "level": "1",
  "url": "mobiusgeomsect.html",
  "type": "Section",
  "number": "3.2",
  "title": "Möbius geometry",
  "body": " Möbius geometry  Möbius geometry provides a unifying framework for studying planar geometries. In particular, the transformation groups of hyperbolic and elliptic geometries in the sections that follow are subgroups of the group of Möbius transformations.    Möbius transformations  A Möbius transformation Möbius transformation (also called a linear fractional transformation linear fractional transformation ) is a function of the form where is a complex variable, are complex constants, and .    Show that if , then defines a one-to-one and onto map by finding an explicit inverse for and showing that and are both the identity function on .  Show that if , then defines a one-to-one and onto map by finding an explicit inverse for and showing that is the identity function on and and is the identity function on .  For both cases 1 and 2 above, identify precisely where you use the condition . Show that, in fact, is invertible if and only if .      A Möbius transformation determines a one-to-one and onto map of the extended complex plane to itself with the following assignments: if , we define ; if , we define and .     Show that the composition of two Möbius transformations is a Möbius transformation. Suggestion: First show that the composition has the form . Next, instead of a brute force calculation to check that , use .     The definitions and Checkpoint exercises above show that the set of all Möbius transformations forms a group under the operation of composition of functions. This group, denoted  Möbius transformation group  , is called the Möbius group . Möbius group  groups, list of Möbius group   Möbius geometry Möbius geometry  geometries, list of Möbius geometry  is the pair .     Note on notational convention: It is customary to use capital letters such as to denote Möbius transformations. It is also customary to omit the parentheses, and to write instead of to denote the value of a Möbius transformation.  There is a natural relationship between Möbius group operations and matrix group operations. The map given by is a group homomorphism. The kernel of is the group of nonzero scalar matrices. . The quotient group is called the projective linear group  . Thus we have a group isomorphism .  Show that the map is a group homomorphism. Show that the kernel of is .    Homotheties, rotations, translations, and inversions (see in ) are special cases of Möbius transformations. These basic transformations can be viewed as building blocks for general Möbius transformations, as follows.   Every Möbius transformation is a composition of homotheties, rotations, translations, and inversions.      Identify the values of the coefficients in a Möbius transformation that is a homothety, rotation, translation, and inversion, respectively.  Write a Möbius transformation that does clockwise rotation by one-quarter rotation about the point .      Möbius transformations are conformal.    Apply and to prove .    The Fundamental Theorem of Möbius Geometry  The Fundamental Theorem of Möbius Geometry says that all three-point sets are congruent. It will turn out to be convenient to work with the standard three-point set . Given any three distinct complex numbers it is easy to check that the transformation given by satisfies .  Verify that satisfies .   It is easy to adapt to the extended complex plane, where one of the may be the point at infinity.   Any three-point set is congruent to    Let be distinct points in the extended complex plane. There exists a Möbius transformation such that .     Prove by finding explicit formulas for for each of the three cases , and .          The next Lemma lays lays the groundwork for proving the uniqueness of congruences between three-point sets.   If a Möbius transformation has more than two fixed points, then it is the identity transformation.     Prove .  Solve . You will need to consider cases.    The Fundamental Theorem of Möbius Geometry  Fundamental Theorem of Möbius geometry  A Möbius transformation is completely determined by any three input-output pairs. This means that for any triple of distinct input values in and any triple of distinct output values in , there is a unique such that for .      Cross ratio  Given three distinct points in , we write to denote the unique Möbius transformation that satisfies , , and (the existence and uniqueness of this transformation is guaranteed by the Fundamental Theorem of Möbius Geometry). We write to denote the image of under . The expression is called the cross ratio cross ratio of Möbius geometry of the 4-tuple . By , we have the following explicit formula for the cross ratio.  The cross ratio is a useful tool because it is invariant under Möbius transformations. Here is the formal statement with a proof.  Cross ratio is invariant Let be distinct points in , let , and let be any Möbius transformation. Then we have    The transformations and both send , , and , so they must be equal, by the Fundamental Theorem. Now apply both transformations to .      Clines (generalized circles)  A Euclidean circle or straight line is called a cline cline (pronounced kline ) or generalized circle generalized circle . The propositions and corollaries in this subsection show that the set of all clines is a single congruence class of figures in Möbius geometry.  Let be distinct points in , let , and let be the inverse image of the extended real line under . Then is a Euclidean circle or straight line. Furthermore, is the unique Euclidean circle or straight line that contains the points .    The cross ratio is real if and only if lie on a Euclidean circle or straight line.    Explain how follows from .    Let be a Euclidean circle or straight line in and let be any Möbius transformation. Then is a Euclidean circle or straight line.    Explain how follows from .  Let be three points on and let . Let and let . Explain why and hence that must be a cline.    All clines are congruent in Möbius geometry.    Explain how follows from .  Start here: Let be two clines. Let be three points on and let be three points on . Let and let , and let . Explain why takes to .     Symmetry with respect to a cline  Geometrically, the conjugation map in the complex plane is reflection across the real line. This mirror symmetry generalizes to symmetry with respect to any cline, as follows. Given a cline that contains in , let . Given any point , the symmetric point with respect to  is where is the extension of the conjugation map to the extended complex plane that sends . The idea is to map to the real line via , then conjugate, then map the real line back to . See .   Symmetric points with respect to the circle     Show that the symmetric point of a symmetric point is the point you started with. That is, show that . This allows us to speak of a pair of symmetric points without ambiguity.    The definition of depends only on the cline , and not on the three points .    Let be a cline and let be a Möbius transformation. If are a pair of points that are symmetric with respect to , then are symmetric with respect to the cline . That is, we have   Let be three points on , so that are three points on . Let and let . By invariance of the cross ratio, we have . Thus we have as desired.     Normal forms  We conclude this section on Möbius geometry with a discussion of the normal form normal form of a Möbius transformation. We begin with a Lemma.  If a Möbius transformation has exactly two fixed points and , then it has the form for some nonzero . If a Möbius transformation has a single fixed point at , then it has the form for some nonzero .    Now suppose that a Möbius transformation has two fixed points, and . Let be given by . Let and let be the transformation of the -plane that is conjugate to via (see ). It is easy to check that has exactly two fixed points and . Applying the previous Lemma, we have for some nonzero . Applying both sides of to , we have the following normal form for . The transformation is called elliptic elliptic Möbius transformation , hyperbolic hyperbolic Möbius transformation , or loxodromic loxodromic Möbius transformation if is a rotation ( ), a homothety ( ), or neither, respectively.  Finally, suppose that a Möbius transformation has exactly one fixed point at . Let be given by . Again, let and let . This time, has exactly one fixed point at . Applying the Lemma, we have for some nonzero . Applying both sides of to , we have the following normal form for . A Möbius transformation of this type is called parabolic parabolic Möbius transformation . Here is a summary of the classification terminology associated with normal forms.   Summary of normal forms of     normal form type  normal form  conjugate transformation type    elliptic     rotation   hyperbolic     homothety   loxodromic     composition of homothety with rotation           parabolic     translation       Steiner circles   The polar coordinate grid and Steiner circle coordinate grid     Degenerate coordinate grid lines and degenerate Steiner circles    The discussion of normal forms show that any non-identity Möbius transformation is conjugate to one of two basic forms, or . The natural coordinate system for depicting the action of is standard polar coordinates. See . A homothety is a flow along radial lines and a rotation is a flow around polar circles. The natural degenerate coordinate system for depicting a translation is a family of lines parallel to the line that contains the origin and . A translation by is a flow along these parallel lines. See .  Pulling the polar and degenerate coordinate grids back to the -plane by leads to coordinate grids called Steiner circles Steiner circles . The convention for which Steiner circles are considered first or second kinds is not universal. Here we follow the convention used by Ahlfors and Henle . In the case where has two fixed points , the conjugating map takes , . Therefore maps and . The transformation maps radial lines in the -plane to clines in the -plane that contain and called Steiner circles of the first kind Steiner circles Steiner circles of the first kind , and maps polar circles in the -plane to clines in the -plane called Steiner circles of the second kind Steiner circles Steiner circles of the second kind  or circles of Apollonius circles of Apollonius . See .  In the case where has one fixed point , the conjugating map sends , so maps , and maps lines in the -plane that are parallel to the line through and to clines in the -plane that contain . Every cline in this family is tangent to every other cline in this family at exactly the one point . Clines in this family are called degenerate Steiner circles Steiner circles degenerate Steiner circles  . See . summarizes the graphical depiction of Möbius transformations.  Summary of Steiner circle pictures of Möbius transformations    normal form type   graphical dynamic    elliptic  flow along Steiner circles of the second kind   hyperbolic  flow along Steiner circles of the first kind   loxodromic  composition of elliptic and hyperbolic flows   parabolic  flow along degenerate Steiner circles       Decomposition of Möbius transformations into four basic types    Explain why a transformation of the form , with any nonzero complex constant, is a composition of a homothety and a rotation.  Explicitly identify each homothety, rotation, translation, and inversion in to in the derivation below for the case .   Write your own decomposition for the case .      Prove the Fundamental Theorem of Möbius Geometry ( ).   Start by using to get a Möbius transformation that maps to , and there is a Möbius transformation that maps to .    Find Möbius transformations that make the following assignments.          Prove . Suggestion: Let , then manipulate to an equation with terms and coefficients involving and their conjugates. For the case when the coefficient of is not zero, use complex completing the square (see ) to derive the equation of a circle. Peek at the first part hint below if you need to, and use it to work partially forwards from , and partially backwards from the equation in the hint. For the case when the coefficient of is zero, derive the equation for a line. For the furthermore statement, you will need to show that any three points in the plane determine a unique circle or straight line. This is a Euclidean statement, and it is straightforward to prove this using Euclidean methods (peek at the second part of the hint below if you need to).  Equation for the circle: Why do three noncollinear points determine a unique circle? The center of the circle must be the intersection of the perpendicular bisectors of segments , . The radius must be the distance from to any one of .     Geometry for symmetric points with respect to the cline     Symmetry with respect to a cline   Prove by completing the details in the following outline. Let be a cline that contains points , where . First, consider the case when is a circle, say, with equation , where are the center and radius, respectively, of (see ).   Square both sides of and solve for to get .  We have Explain how invariance of the cross ratio is used to justify the equality (1) in this derivation.  Explain how we can conclude that , and that indeed this does not depend on the choice of .  Now suppose that is a line, say, with equation (see ). This is the same as . Solve to get   We have Explain how invariance of the cross ratio is used to justify the equality (1) in this derivation.  Explain how we can conclude that , and that indeed this does not depend on the choice of .    Show that are symmetric with respect to a circle with center and radius if and only if and lie on the same ray emanating from . See .  Show that are symmetric with respect to a line if and only if are reflections of one another across . See .    For part (b): The equation for in part iii gives . For the first statement, take the norm of both sides. For the second statement, take the argument of both sides.    Normal forms and Steiner circles  Prove .   Find the normal form and sketch a graph using Steiner circles for the following transformations.        Let be the single fixed point of a Möbius transformation that is conjugate to via . Show that the single line in the degenerate Steiner clines through is parallel to the direction given by .  Show that , so takes to . Thus the single degenerate Steiner straight line through is in the direction given by .   Show that a (generalized) circle of Apollonius (a Steiner circle of the second kind) is characterized as the set of points of the form for some and some real constant .         "
},
{
  "id": "mobiusgeomsect-3-2",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgeomsect-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Möbius transformation linear fractional transformation "
},
{
  "id": "mobiustransinvertcriterionexer",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiustransinvertcriterionexer",
  "type": "Checkpoint",
  "number": "3.2.1",
  "title": "",
  "body": "  Show that if , then defines a one-to-one and onto map by finding an explicit inverse for and showing that and are both the identity function on .  Show that if , then defines a one-to-one and onto map by finding an explicit inverse for and showing that is the identity function on and and is the identity function on .  For both cases 1 and 2 above, identify precisely where you use the condition . Show that, in fact, is invertible if and only if .    "
},
{
  "id": "mobiustranscomposeexer",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiustranscomposeexer",
  "type": "Checkpoint",
  "number": "3.2.2",
  "title": "",
  "body": "Show that the composition of two Möbius transformations is a Möbius transformation. Suggestion: First show that the composition has the form . Next, instead of a brute force calculation to check that , use .  "
},
{
  "id": "mobiusgeomsect-3-6",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgeomsect-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Möbius group Möbius geometry "
},
{
  "id": "mobiusgeomsect-3-8",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgeomsect-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projective linear group "
},
{
  "id": "mobiusgpaspgl2exer",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgpaspgl2exer",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "",
  "body": "Show that the map is a group homomorphism. Show that the kernel of is .  "
},
{
  "id": "mobiusdecompbasic",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusdecompbasic",
  "type": "Proposition",
  "number": "3.2.5",
  "title": "",
  "body": "Every Möbius transformation is a composition of homotheties, rotations, translations, and inversions.   "
},
{
  "id": "littlemobiusexer",
  "level": "2",
  "url": "mobiusgeomsect.html#littlemobiusexer",
  "type": "Checkpoint",
  "number": "3.2.6",
  "title": "",
  "body": "  Identify the values of the coefficients in a Möbius transformation that is a homothety, rotation, translation, and inversion, respectively.  Write a Möbius transformation that does clockwise rotation by one-quarter rotation about the point .    "
},
{
  "id": "mobtransconformal",
  "level": "2",
  "url": "mobiusgeomsect.html#mobtransconformal",
  "type": "Corollary",
  "number": "3.2.7",
  "title": "",
  "body": "Möbius transformations are conformal.   "
},
{
  "id": "mobtransconformalexer",
  "level": "2",
  "url": "mobiusgeomsect.html#mobtransconformalexer",
  "type": "Checkpoint",
  "number": "3.2.8",
  "title": "",
  "body": "Apply and to prove .  "
},
{
  "id": "basecasemob10inftyformexer",
  "level": "2",
  "url": "mobiusgeomsect.html#basecasemob10inftyformexer",
  "type": "Checkpoint",
  "number": "3.2.9",
  "title": "",
  "body": "Verify that satisfies .  "
},
{
  "id": "std3ptsetlemma",
  "level": "2",
  "url": "mobiusgeomsect.html#std3ptsetlemma",
  "type": "Lemma",
  "number": "3.2.10",
  "title": "Any three-point set is congruent to <span class=\"process-math\">\\(\\{1,0,\\infty\\}\\)<\/span>.",
  "body": "Any three-point set is congruent to    Let be distinct points in the extended complex plane. There exists a Möbius transformation such that .   "
},
{
  "id": "std3ptsetlemmaexer",
  "level": "2",
  "url": "mobiusgeomsect.html#std3ptsetlemmaexer",
  "type": "Checkpoint",
  "number": "3.2.11",
  "title": "",
  "body": "Prove by finding explicit formulas for for each of the three cases , and .        "
},
{
  "id": "threefixptsisidlemma",
  "level": "2",
  "url": "mobiusgeomsect.html#threefixptsisidlemma",
  "type": "Lemma",
  "number": "3.2.12",
  "title": "",
  "body": "If a Möbius transformation has more than two fixed points, then it is the identity transformation.   "
},
{
  "id": "threefixptsisidlemmaexer",
  "level": "2",
  "url": "mobiusgeomsect.html#threefixptsisidlemmaexer",
  "type": "Checkpoint",
  "number": "3.2.13",
  "title": "",
  "body": "Prove .  Solve . You will need to consider cases.  "
},
{
  "id": "ftomg",
  "level": "2",
  "url": "mobiusgeomsect.html#ftomg",
  "type": "Proposition",
  "number": "3.2.14",
  "title": "The Fundamental Theorem of Möbius Geometry.",
  "body": "The Fundamental Theorem of Möbius Geometry  Fundamental Theorem of Möbius geometry  A Möbius transformation is completely determined by any three input-output pairs. This means that for any triple of distinct input values in and any triple of distinct output values in , there is a unique such that for .   "
},
{
  "id": "mobiusgeomsect-5-2",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgeomsect-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cross ratio "
},
{
  "id": "crossratioinvariant",
  "level": "2",
  "url": "mobiusgeomsect.html#crossratioinvariant",
  "type": "Proposition",
  "number": "3.2.15",
  "title": "Cross ratio is invariant.",
  "body": "Cross ratio is invariant Let be distinct points in , let , and let be any Möbius transformation. Then we have    The transformations and both send , , and , so they must be equal, by the Fundamental Theorem. Now apply both transformations to .   "
},
{
  "id": "mobiusgeomsect-6-2",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgeomsect-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cline generalized circle "
},
{
  "id": "mobinvrealisclineprop",
  "level": "2",
  "url": "mobiusgeomsect.html#mobinvrealisclineprop",
  "type": "Proposition",
  "number": "3.2.16",
  "title": "",
  "body": "Let be distinct points in , let , and let be the inverse image of the extended real line under . Then is a Euclidean circle or straight line. Furthermore, is the unique Euclidean circle or straight line that contains the points .   "
},
{
  "id": "crossratiorealcriterion",
  "level": "2",
  "url": "mobiusgeomsect.html#crossratiorealcriterion",
  "type": "Corollary",
  "number": "3.2.17",
  "title": "",
  "body": "The cross ratio is real if and only if lie on a Euclidean circle or straight line.   "
},
{
  "id": "crossratiorealcriterionexer",
  "level": "2",
  "url": "mobiusgeomsect.html#crossratiorealcriterionexer",
  "type": "Checkpoint",
  "number": "3.2.18",
  "title": "",
  "body": "Explain how follows from .  "
},
{
  "id": "clinesinvariant",
  "level": "2",
  "url": "mobiusgeomsect.html#clinesinvariant",
  "type": "Corollary",
  "number": "3.2.19",
  "title": "",
  "body": "Let be a Euclidean circle or straight line in and let be any Möbius transformation. Then is a Euclidean circle or straight line.   "
},
{
  "id": "clinesinvariantexer",
  "level": "2",
  "url": "mobiusgeomsect.html#clinesinvariantexer",
  "type": "Checkpoint",
  "number": "3.2.20",
  "title": "",
  "body": "Explain how follows from .  Let be three points on and let . Let and let . Explain why and hence that must be a cline.  "
},
{
  "id": "clinescongruent",
  "level": "2",
  "url": "mobiusgeomsect.html#clinescongruent",
  "type": "Corollary",
  "number": "3.2.21",
  "title": "",
  "body": "All clines are congruent in Möbius geometry.   "
},
{
  "id": "clinescongruentexer",
  "level": "2",
  "url": "mobiusgeomsect.html#clinescongruentexer",
  "type": "Checkpoint",
  "number": "3.2.22",
  "title": "",
  "body": "Explain how follows from .  Start here: Let be two clines. Let be three points on and let be three points on . Let and let , and let . Explain why takes to .  "
},
{
  "id": "mobiusgeomsect-7-2",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgeomsect-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric point with respect to  "
},
{
  "id": "symmetric_pt_fig",
  "level": "2",
  "url": "mobiusgeomsect.html#symmetric_pt_fig",
  "type": "Figure",
  "number": "3.2.23",
  "title": "",
  "body": " Symmetric points with respect to the circle    "
},
{
  "id": "mobiusgeomsect-7-4",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgeomsect-7-4",
  "type": "Checkpoint",
  "number": "3.2.24",
  "title": "",
  "body": "Show that the symmetric point of a symmetric point is the point you started with. That is, show that . This allows us to speak of a pair of symmetric points without ambiguity.   "
},
{
  "id": "symmptindeppts",
  "level": "2",
  "url": "mobiusgeomsect.html#symmptindeppts",
  "type": "Proposition",
  "number": "3.2.25",
  "title": "",
  "body": "The definition of depends only on the cline , and not on the three points .   "
},
{
  "id": "symmptinvariantprop",
  "level": "2",
  "url": "mobiusgeomsect.html#symmptinvariantprop",
  "type": "Proposition",
  "number": "3.2.26",
  "title": "",
  "body": "Let be a cline and let be a Möbius transformation. If are a pair of points that are symmetric with respect to , then are symmetric with respect to the cline . That is, we have   Let be three points on , so that are three points on . Let and let . By invariance of the cross ratio, we have . Thus we have as desired.   "
},
{
  "id": "normalformssubsect-2",
  "level": "2",
  "url": "mobiusgeomsect.html#normalformssubsect-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal form "
},
{
  "id": "normalformlemma",
  "level": "2",
  "url": "mobiusgeomsect.html#normalformlemma",
  "type": "Lemma",
  "number": "3.2.27",
  "title": "",
  "body": "If a Möbius transformation has exactly two fixed points and , then it has the form for some nonzero . If a Möbius transformation has a single fixed point at , then it has the form for some nonzero .   "
},
{
  "id": "normalformssubsect-4",
  "level": "2",
  "url": "mobiusgeomsect.html#normalformssubsect-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptic hyperbolic loxodromic "
},
{
  "id": "normalformssubsect-5",
  "level": "2",
  "url": "mobiusgeomsect.html#normalformssubsect-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parabolic "
},
{
  "id": "normalformssubsect-6",
  "level": "2",
  "url": "mobiusgeomsect.html#normalformssubsect-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptic hyperbolic loxodromic parabolic "
},
{
  "id": "twofixedptgrid_fig",
  "level": "2",
  "url": "mobiusgeomsect.html#twofixedptgrid_fig",
  "type": "Figure",
  "number": "3.2.29",
  "title": "",
  "body": " The polar coordinate grid and Steiner circle coordinate grid   "
},
{
  "id": "degenerate_grid_fig",
  "level": "2",
  "url": "mobiusgeomsect.html#degenerate_grid_fig",
  "type": "Figure",
  "number": "3.2.30",
  "title": "",
  "body": " Degenerate coordinate grid lines and degenerate Steiner circles   "
},
{
  "id": "mobiusgeomsect-9-5",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgeomsect-9-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Steiner circles Steiner circles of the first kind Steiner circles of the second kind circles of Apollonius "
},
{
  "id": "mobiusgeomsect-9-6",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusgeomsect-9-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degenerate Steiner circles "
},
{
  "id": "steinercirclesummary",
  "level": "2",
  "url": "mobiusgeomsect.html#steinercirclesummary",
  "type": "Table",
  "number": "3.2.31",
  "title": "Summary of Steiner circle pictures of Möbius transformations",
  "body": "Summary of Steiner circle pictures of Möbius transformations    normal form type   graphical dynamic    elliptic  flow along Steiner circles of the second kind   hyperbolic  flow along Steiner circles of the first kind   loxodromic  composition of elliptic and hyperbolic flows   parabolic  flow along degenerate Steiner circles    "
},
{
  "id": "mobiusdecompexer",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiusdecompexer",
  "type": "Exercise",
  "number": "3.2.8.1",
  "title": "Decomposition of Möbius transformations into four basic types.",
  "body": "Decomposition of Möbius transformations into four basic types    Explain why a transformation of the form , with any nonzero complex constant, is a composition of a homothety and a rotation.  Explicitly identify each homothety, rotation, translation, and inversion in to in the derivation below for the case .   Write your own decomposition for the case .    "
},
{
  "id": "ftomgexer",
  "level": "2",
  "url": "mobiusgeomsect.html#ftomgexer",
  "type": "Exercise",
  "number": "3.2.8.2",
  "title": "",
  "body": "Prove the Fundamental Theorem of Möbius Geometry ( ).   Start by using to get a Möbius transformation that maps to , and there is a Möbius transformation that maps to .  "
},
{
  "id": "mobiustargetpracticeexer",
  "level": "2",
  "url": "mobiusgeomsect.html#mobiustargetpracticeexer",
  "type": "Exercise",
  "number": "3.2.8.3",
  "title": "",
  "body": "Find Möbius transformations that make the following assignments.       "
},
{
  "id": "mobinvrealisclineexer",
  "level": "2",
  "url": "mobiusgeomsect.html#mobinvrealisclineexer",
  "type": "Exercise",
  "number": "3.2.8.4",
  "title": "",
  "body": " Prove . Suggestion: Let , then manipulate to an equation with terms and coefficients involving and their conjugates. For the case when the coefficient of is not zero, use complex completing the square (see ) to derive the equation of a circle. Peek at the first part hint below if you need to, and use it to work partially forwards from , and partially backwards from the equation in the hint. For the case when the coefficient of is zero, derive the equation for a line. For the furthermore statement, you will need to show that any three points in the plane determine a unique circle or straight line. This is a Euclidean statement, and it is straightforward to prove this using Euclidean methods (peek at the second part of the hint below if you need to).  Equation for the circle: Why do three noncollinear points determine a unique circle? The center of the circle must be the intersection of the perpendicular bisectors of segments , . The radius must be the distance from to any one of .  "
},
{
  "id": "symmptsfig",
  "level": "2",
  "url": "mobiusgeomsect.html#symmptsfig",
  "type": "Figure",
  "number": "3.2.32",
  "title": "",
  "body": " Geometry for symmetric points with respect to the cline    "
},
{
  "id": "symmetricpointexer",
  "level": "2",
  "url": "mobiusgeomsect.html#symmetricpointexer",
  "type": "Exercise",
  "number": "3.2.8.5",
  "title": "Symmetry with respect to a cline.",
  "body": "Symmetry with respect to a cline   Prove by completing the details in the following outline. Let be a cline that contains points , where . First, consider the case when is a circle, say, with equation , where are the center and radius, respectively, of (see ).   Square both sides of and solve for to get .  We have Explain how invariance of the cross ratio is used to justify the equality (1) in this derivation.  Explain how we can conclude that , and that indeed this does not depend on the choice of .  Now suppose that is a line, say, with equation (see ). This is the same as . Solve to get   We have Explain how invariance of the cross ratio is used to justify the equality (1) in this derivation.  Explain how we can conclude that , and that indeed this does not depend on the choice of .    Show that are symmetric with respect to a circle with center and radius if and only if and lie on the same ray emanating from . See .  Show that are symmetric with respect to a line if and only if are reflections of one another across . See .    For part (b): The equation for in part iii gives . For the first statement, take the norm of both sides. For the second statement, take the argument of both sides.  "
},
{
  "id": "normalformlemmaexer",
  "level": "2",
  "url": "mobiusgeomsect.html#normalformlemmaexer",
  "type": "Exercise",
  "number": "3.2.8.6",
  "title": "",
  "body": "Prove .  "
},
{
  "id": "normalformegexer",
  "level": "2",
  "url": "mobiusgeomsect.html#normalformegexer",
  "type": "Exercise",
  "number": "3.2.8.7",
  "title": "",
  "body": "Find the normal form and sketch a graph using Steiner circles for the following transformations.       "
},
{
  "id": "degneratenormalformexer",
  "level": "2",
  "url": "mobiusgeomsect.html#degneratenormalformexer",
  "type": "Exercise",
  "number": "3.2.8.8",
  "title": "",
  "body": "Let be the single fixed point of a Möbius transformation that is conjugate to via . Show that the single line in the degenerate Steiner clines through is parallel to the direction given by .  Show that , so takes to . Thus the single degenerate Steiner straight line through is in the direction given by .  "
},
{
  "id": "apolloniuscircexer",
  "level": "2",
  "url": "mobiusgeomsect.html#apolloniuscircexer",
  "type": "Exercise",
  "number": "3.2.8.9",
  "title": "",
  "body": "Show that a (generalized) circle of Apollonius (a Steiner circle of the second kind) is characterized as the set of points of the form for some and some real constant .  "
},
{
  "id": "hyperbolicgeomsect",
  "level": "1",
  "url": "hyperbolicgeomsect.html",
  "type": "Section",
  "number": "3.3",
  "title": "Hyperbolic geometry",
  "body": " Hyperbolic geometry   Before the discovery of hyperbolic geometry, it was believed that Euclidean geometry was the only possible geometry of the plane. In fact, hyperbolic geometry arose as a byproduct of efforts to prove that there was no alternative to Euclidean geometry. In this section, we present a Kleinian version of hyperbolic geometry.  Let  the open unit disk  denote the open unit disk in the complex plane. The hyperbolic group hyperbolic group , denoted  the hyperbolic group  , is the subgroup of the Möbius group of transformations that map onto itself. The pair is the (Poincaré) disk model Poincaré disk model of hyperbolic geometry  geometries, list of hyperbolic geometry  disk model   hyperbolic geometry disk model  of hyperbolic geometry.    Comments on terminology: Beware of the two different meanings of the adjective hyperbolic . To say that a Möbius transformation is hyperbolic means that it is conjugate to a homothety (see ). That is not the same thing as an element of the group of hyperbolic transformations.   The hyperbolic transformation group  Our first task is to characterize transformations in the group . We begin with an observation about Möbius transformations that map one side of a cline to itself. This is pertinent because the disk is the inside of the cline which is the unit circle. It will be useful to start with a general case.  Any cline divides the extended plane into two regions. If is a Euclidean circle, we might called these regions the inside and the outside of . If is a Euclidean straight line, we simply have one side and the other of .   Möbius transformations that map one side of a cline to itself  Let be a cline, and let be the two disjoint regions of . Let be a Möbius transformation that maps onto itself. Then also maps onto itself, and maps onto itself.  Sketch: Suppose that maps onto itself. The other side of is the set of points that are symmetric, with respect to , to the points in . By , maps symmetric points to symmetric points, so maps into itself. It is easy to check that, in fact, maps  onto itself. By elimination, it must be that maps onto itself.    Complete the sketch of the proof of .   If , then maps the unit circle onto itself.     Given , let be the point that maps to . It must be that maps the symmetric point to . Let be the point that maps to . Then has the form (see ) Multiplying top and bottom by , and setting , we have A straightforward derivation shows that , so that we have below. Another computation establishes an alternative formula for . See .  A Möbius transformation is in if an only if can be written in the form for some and . Alternatively, we have if and only if can be written in the form for some such that .     Classification of clines in hyperbolic geometry  The clines of Möbius geometry are classified into several types in hyperbolic geometry, as summarized in .  Clines in hyperbolic geometry    hyperbolic curve type   cline type    hyperbolic straight line   a cline that intersects the unit circle at right angles     hyperbolic circle   a circle completely contained in    horocycle   a circle with all but one point in , tangent to the unit circle    hypercycle   a cline that intersects the unit circle at a non-right angle      Show that each of the four categories of clines in is preserved by transformations in the hyperbolic group. That is, show that any transformation in the hyperbolic group takes hyperbolic straight lines to hyperbolic straight lines, takes hyperbolic circles to hyperbolic circles, takes horocycles to horocycles, and takes hypercycles to hypercycles.    Show that a hyperbolic straight line that contains 0 must be a diameter of the unit circle.  Prove the contrapositive: assume is a hyperbolic straight line that is also a Euclidean circle, and intersects the unit circle orthogonally at . Give an argument why can not contain 0.    Show that all hyperbolic straight lines are congruent.  Start by showing that any hyperbolic straight line is congruent to .     Normal forms for the hyperbolic group  In this subsection, we follow the development of normal forms for general Möbius transformations given in to derive normal forms and graphical interpretations for transformations in the hyperbolic group. We begin with an observation about fixed points of a Möbius transformation that maps a cline to itself.  Let and let be a cline. If , then .   Apply .    Now let be a non-identity element of . The fact that maps the unit circle to itself implies that there are exactly three possible cases for fixed points of . There is a pair of fixed points with , , and , that is, are a pair of symmetric points (with respect to the unit circle) that do not lie on the unit circle.  There is a pair of fixed points that lie on the unit circle.  There is a single fixed point that lies on the unit circle.    Give an argument to justify the three cases above.     Three types of hyperbolic transformations    For cases 1 and 2 above, the map acting on the -plane is conjugate to the map acting on the -plane by , for some nonzero , via the map . In case 1, the map takes the unit circle to some polar circle, say , so must map to itself. It follows that , so the Möbius normal form type for is elliptic. The action of is a rotation about Steiner circles of the second kind (hyperbolic circles) with respect to the fixed points . A transformation of this type is called a hyperbolic rotation hyperbolic rotation . See .  For case 2, the map takes the unit circle to a straight line, say , through the origin, so must map to itself. It follows that is real. Since maps to one of the two half planes on either side of , the map must take this half plane to itself. If follows that must be a positive real number, so the Möbius normal form type for is hyperbolic. The action of is a flow about Steiner circles of the first kind (hypercycles and one hyperbolic straight line) with respect to the fixed points . A transformation of this type is called a hyperbolic translation hyperbolic translation . See .  For case 3, the conjugating map takes to of the form for some . The Möbius normal form type for is parabolic. The action of is a flow along degenerate Steiner circles (horocycles) tangent to the unit circle at . A transformation of this type is called a parallel displacement parallel displacement . See .  This completes the list of transformation types for the hyperbolic group. See for a summary.  Normal forms for the hyperbolic group    hyperbolic transformation type   Möbius normal form   graphical dynamic    hyperbolic rotation   elliptic  flow around hyperbolic circles     parallel displacement   parabolic  flow around horocycles    hyperbolic translation   hyperbolic  flow along hypercycles    (none)   loxodromic         Hyperbolic length and area   Constructing the hyperbolic straight line containing two points     Let be distinct points in . Let be the transformation that sends and . Then is a hyperbolic straight line that contains . Let and . See .  Use to write a formula for the transformation in the previous paragraph.     Let , let , and let , so that we have and . Because , is determined by the two parameters .   A simple calculation verifies that . By invariance of the cross ratio, we have . For , we have with equality on the left if and only if .  Do the simple calculation mentioned above. Use .    Now, given any points in , not necessarily distinct, define the quantity by where are the ideal points on the hyperbolic straight line connecting (with each at the end of the line) as described above, in the case . From the discussion above we have where .  Justify the value of in .   The function given by is invariant under the action of the hyperbolic group. That is, we have for all and for all .    Prove .   The following Proposition shows that is a metric on hyperbolic space, and justifies referring to as the (hyperbolic) distance hyperbolic distance between the points   The function given by defines a metric on . That is, satisfies the following conditions for all in .  , and if and only if    (the triangle inequality)     Property 1 follows immediately from . Property 2 is a simple calculation: just write down the cross ratio expressions for and and compare. The proof of Property 3 is outlined in exercise .    Now let be a curve parameterized by , where are differentiable real-valued functions of the real parameter on an interval . Consider a short segment of , say, on an interval . Let and . Then we have where . The quantity is well-approximated by , where and . Thus, is well-approximated by . The first order Taylor approximation for is . Putting this all together, we have the following.   Show that the first order Taylor approximation of is .   Find the length of the hyperbolic circle parameterized by for , where .   We conclude this subsection on hyperbolic length and area with an integral formula for the area of a region in , following the development in . As a function of the two real variables and , the polar form expression gives rise to the two parameterized curves (where is constant) and (where is constant). Using and , the arc length differential for the two curves are the following.  Thus we have , so that the area of a region is   Find the area of the hyperbolic disk , for .    The upper-half plane model   The upper half-plane model of hyperbolic geometry geometries, list of hyperbolic geometry  upper half-plane model   upper half-plane model of hyperbolic geometry  hyperbolic geometry upper half-plane model   Let  the upper half-plane  denote the half of the complex plane above the real axis, and let  the upper half-plane group   groups, list of upper half-plane transformation group  denote the subgroup of the Möbius group of transformations that map onto itself. The pair is the upper half-plane model of hyperbolic geometry.       A Möbius transformation is in if and only if can be written in the form such that are real and .    Hyperbolic straight lines in the upper half-plane model are clines that intersect the real line at right angles. The hyperbolic distance between two points in the upper half-plane is where are the points on the (extended) real line at the end of the hyperbolic straight line that contains , with each on the same side as the corresponding . The hyperbolic length of a curve parameterized by on the interval is The hyperbolic area of a region in is     Prove using the following outline.  Complete the proof of using this outline: Let and apply . We have Continue this derivation to show that .  Prove by verifying the following. Given and , show that the assignments satisfy and that . Conversely, given with , show that the assignments satisfy , and that holds.      Two points determine a line Let be distinct points in . Show that there is a unique hyperbolic straight line that contains and . Start by choosing a transformation that sends . For uniqueness, use .    Dropping a perpendicular from a point to a line Let be a hyperbolic straight line and let be a point not on . Show that there is a unique hyperbolic straight line that contains and is orthogonal to .  Start by choosing a transformation that sends . For uniqueness, use .    The triangle inequality for the hyperbolic metric Show that for all in using the outline below.  Show that the triangle inequality holds with strict equality when are collinear and is between and . Suggestion: This is a straightforward computation using the cross ratio expressions for the values of .  Show that the triangle inequality holds with strict inequality when are collinear and is not between and .  Let lie on a hyperbolic line , let , let be a line through perpendicular to (this line exists by ), and let be the point of intersection of . Show that . Suggestion: apply that takes and takes . Let if and let if . Let . See .  Given arbitrary , apply a transformation to send and to a nonnegative real point. Drop a perpendicular from to the real line, say, to . Apply results from the previous steps of this outline.         Prove .   For the only if direction, apply to the cline , and conclude that must send the real line to itself. Set to be the preimages under of , and then use . For the if direction, suppose has the given form. Let and show that .    Length integral in the upper half-plane model This exercise is to establish . The strategy is to obtain the differential expression for a curve with , , and using the following sequence of steps. First, map in to in using a transformation that preserves distance.  Using the analysis we used to get the disk model length integral formula , we have where .  Translate the above expression in terms of , and show that the differential approximation is .  Complete the exercise parts below to carry out the strategy just outlined.  Show that takes to .  Let and . Show that for some real .  Let . Show that       Area integral in the upper half-plane model Adapt the argument in the paragraph preceding the disk model area integral to establish the upper half-plane area integral .      Hyperbolic triangle     Area of a hyperbolic triangle. The following sequence of exercises establishes the area formula for hyperbolic triangles.  Area of a doubly-asymptotic triangle A triangle with one vertex in and two vertices on the unit circle, connected by arcs of circles that are orthogonal to the unit circle, is called a doubly-asymptotic doubly-asymptotic hyperbolic triangle hyperbolic triangle. Examples are , , and in . Explain why any doubly-asymptotic triangle in the upper half-plane is congruent to the one shown in for some angle .  Now use the integration formula for the upper half-plane model to show that the area of the doubly-asymptotic triangle with angle (at the vertex interior to ) is .    Doubly-asymptotic hyperbolic triangle in the upper half-plane with vertices with on the upper half of the unit circle      Area of an asymptotic -gon A polygon with vertices on the unit circle, connected by arcs of circles that are orthogonal to the unit circle, is called an asymptotic asymptotic -gon in hyperbolic space  -gon. An example of an asymptotic hexagon is the figure with vertices connected by the colored hyperbolic lines in . Show that the area of an asymptotic -gon is .  Partition the asymptotic -gon into doubly-asymptotic triangles.   Area of a hyperbolic triangle Let be a hyperbolic triangle. Extend the three sides , , to six points on the unit circle. See . Use a partition of the asymptotic hexagon whose vertices are these six points to show that the area of is   Partition the asymptotic hexagon with vertices . Start with the six overlapping doubly-asymptotic triangles whose bases are colored arcs and whose vertex in is whichever of matches the color of the base. For example, the two red doubly-asymptotic triangles are and .      "
},
{
  "id": "hyperbolicgeomsect-2-2",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicgeomsect-2-2",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "Let  the open unit disk  denote the open unit disk in the complex plane. The hyperbolic group hyperbolic group , denoted  the hyperbolic group  , is the subgroup of the Möbius group of transformations that map onto itself. The pair is the (Poincaré) disk model Poincaré disk model of hyperbolic geometry  geometries, list of hyperbolic geometry  disk model   hyperbolic geometry disk model  of hyperbolic geometry.   "
},
{
  "id": "transpreservesdiskprop",
  "level": "2",
  "url": "hyperbolicgeomsect.html#transpreservesdiskprop",
  "type": "Proposition",
  "number": "3.3.2",
  "title": "Möbius transformations that map one side of a cline to itself.",
  "body": " Möbius transformations that map one side of a cline to itself  Let be a cline, and let be the two disjoint regions of . Let be a Möbius transformation that maps onto itself. Then also maps onto itself, and maps onto itself.  Sketch: Suppose that maps onto itself. The other side of is the set of points that are symmetric, with respect to , to the points in . By , maps symmetric points to symmetric points, so maps into itself. It is easy to check that, in fact, maps  onto itself. By elimination, it must be that maps onto itself.   "
},
{
  "id": "transpreservesdiskpropexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#transpreservesdiskpropexer",
  "type": "Checkpoint",
  "number": "3.3.3",
  "title": "",
  "body": "Complete the sketch of the proof of . "
},
{
  "id": "hyperbolictransfixunitcirc",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolictransfixunitcirc",
  "type": "Corollary",
  "number": "3.3.4",
  "title": "",
  "body": "If , then maps the unit circle onto itself.    "
},
{
  "id": "hyperbolictransformulaprop",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolictransformulaprop",
  "type": "Proposition",
  "number": "3.3.5",
  "title": "",
  "body": "A Möbius transformation is in if an only if can be written in the form for some and . Alternatively, we have if and only if can be written in the form for some such that .   "
},
{
  "id": "hyperbolicclinesummary",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicclinesummary",
  "type": "Table",
  "number": "3.3.6",
  "title": "Clines in hyperbolic geometry",
  "body": "Clines in hyperbolic geometry    hyperbolic curve type   cline type    hyperbolic straight line   a cline that intersects the unit circle at right angles     hyperbolic circle   a circle completely contained in    horocycle   a circle with all but one point in , tangent to the unit circle    hypercycle   a cline that intersects the unit circle at a non-right angle     "
},
{
  "id": "hypclinetypespreservedexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hypclinetypespreservedexer",
  "type": "Checkpoint",
  "number": "3.3.7",
  "title": "",
  "body": "Show that each of the four categories of clines in is preserved by transformations in the hyperbolic group. That is, show that any transformation in the hyperbolic group takes hyperbolic straight lines to hyperbolic straight lines, takes hyperbolic circles to hyperbolic circles, takes horocycles to horocycles, and takes hypercycles to hypercycles.  "
},
{
  "id": "hyplinewith0isdiam",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyplinewith0isdiam",
  "type": "Checkpoint",
  "number": "3.3.8",
  "title": "",
  "body": "Show that a hyperbolic straight line that contains 0 must be a diameter of the unit circle.  Prove the contrapositive: assume is a hyperbolic straight line that is also a Euclidean circle, and intersects the unit circle orthogonally at . Give an argument why can not contain 0.  "
},
{
  "id": "hyplinescongruentexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyplinescongruentexer",
  "type": "Checkpoint",
  "number": "3.3.9",
  "title": "",
  "body": "Show that all hyperbolic straight lines are congruent.  Start by showing that any hyperbolic straight line is congruent to .  "
},
{
  "id": "hyperbolicfixptlemma",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicfixptlemma",
  "type": "Lemma",
  "number": "3.3.10",
  "title": "",
  "body": "Let and let be a cline. If , then .   Apply .   "
},
{
  "id": "hyperbolicfixptcaseexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicfixptcaseexer",
  "type": "Checkpoint",
  "number": "3.3.11",
  "title": "",
  "body": "Give an argument to justify the three cases above.  "
},
{
  "id": "hyp_transf_fig",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyp_transf_fig",
  "type": "Figure",
  "number": "3.3.12",
  "title": "",
  "body": " Three types of hyperbolic transformations   "
},
{
  "id": "hyperbolicgeomsect-5-7",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicgeomsect-5-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic rotation "
},
{
  "id": "hyperbolicgeomsect-5-8",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicgeomsect-5-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic translation "
},
{
  "id": "hyperbolicgeomsect-5-9",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicgeomsect-5-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallel displacement "
},
{
  "id": "hyperbolictransfsummary",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolictransfsummary",
  "type": "Table",
  "number": "3.3.13",
  "title": "Normal forms for the hyperbolic group",
  "body": "Normal forms for the hyperbolic group    hyperbolic transformation type   Möbius normal form   graphical dynamic    hyperbolic rotation   elliptic  flow around hyperbolic circles     parallel displacement   parabolic  flow around horocycles    hyperbolic translation   hyperbolic  flow along hypercycles    (none)   loxodromic       "
},
{
  "id": "hyperbolic_distance_fig",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolic_distance_fig",
  "type": "Figure",
  "number": "3.3.14",
  "title": "",
  "body": " Constructing the hyperbolic straight line containing two points    "
},
{
  "id": "hyperbolicdisttransexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicdisttransexer",
  "type": "Checkpoint",
  "number": "3.3.15",
  "title": "",
  "body": "Use to write a formula for the transformation in the previous paragraph.     Let , let , and let , so that we have and . Because , is determined by the two parameters .  "
},
{
  "id": "hyperbolicdistbasiccalcexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicdistbasiccalcexer",
  "type": "Checkpoint",
  "number": "3.3.16",
  "title": "",
  "body": "Do the simple calculation mentioned above. Use .  "
},
{
  "id": "hyperbolicdistformexer2",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicdistformexer2",
  "type": "Checkpoint",
  "number": "3.3.17",
  "title": "",
  "body": "Justify the value of in . "
},
{
  "id": "hyperbolic_metric_is_invariant",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolic_metric_is_invariant",
  "type": "Proposition",
  "number": "3.3.18",
  "title": "",
  "body": "The function given by is invariant under the action of the hyperbolic group. That is, we have for all and for all .   "
},
{
  "id": "hyperbolicgeomsect-6-10",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicgeomsect-6-10",
  "type": "Checkpoint",
  "number": "3.3.19",
  "title": "",
  "body": "Prove . "
},
{
  "id": "hyperbolicgeomsect-6-11",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicgeomsect-6-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(hyperbolic) distance "
},
{
  "id": "hyperbolicmetricprop",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicmetricprop",
  "type": "Proposition",
  "number": "3.3.20",
  "title": "",
  "body": "The function given by defines a metric on . That is, satisfies the following conditions for all in .  , and if and only if    (the triangle inequality)     Property 1 follows immediately from . Property 2 is a simple calculation: just write down the cross ratio expressions for and and compare. The proof of Property 3 is outlined in exercise .   "
},
{
  "id": "taylorseriesinvhyptanexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#taylorseriesinvhyptanexer",
  "type": "Checkpoint",
  "number": "3.3.21",
  "title": "",
  "body": "Show that the first order Taylor approximation of is . "
},
{
  "id": "hyperboliccirclecircumexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperboliccirclecircumexer",
  "type": "Checkpoint",
  "number": "3.3.22",
  "title": "",
  "body": "Find the length of the hyperbolic circle parameterized by for , where . "
},
{
  "id": "hypdiskareaexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hypdiskareaexer",
  "type": "Checkpoint",
  "number": "3.3.23",
  "title": "",
  "body": "Find the area of the hyperbolic disk , for . "
},
{
  "id": "hyperbolicgeomsect-7-2",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolicgeomsect-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper half-plane model "
},
{
  "id": "upperhalfplanetransfprop",
  "level": "2",
  "url": "hyperbolicgeomsect.html#upperhalfplanetransfprop",
  "type": "Proposition",
  "number": "3.3.25",
  "title": "",
  "body": "  A Möbius transformation is in if and only if can be written in the form such that are real and .   "
},
{
  "id": "hyperbolictransformulaexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolictransformulaexer",
  "type": "Exercise",
  "number": "3.3.6.1",
  "title": "",
  "body": "Prove using the following outline.  Complete the proof of using this outline: Let and apply . We have Continue this derivation to show that .  Prove by verifying the following. Given and , show that the assignments satisfy and that . Conversely, given with , show that the assignments satisfy , and that holds.    "
},
{
  "id": "twopts2lineexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#twopts2lineexer",
  "type": "Exercise",
  "number": "3.3.6.2",
  "title": "Two points determine a line.",
  "body": "Two points determine a line Let be distinct points in . Show that there is a unique hyperbolic straight line that contains and . Start by choosing a transformation that sends . For uniqueness, use .  "
},
{
  "id": "dropperpexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#dropperpexer",
  "type": "Exercise",
  "number": "3.3.6.3",
  "title": "Dropping a perpendicular from a point to a line.",
  "body": "Dropping a perpendicular from a point to a line Let be a hyperbolic straight line and let be a point not on . Show that there is a unique hyperbolic straight line that contains and is orthogonal to .  Start by choosing a transformation that sends . For uniqueness, use .  "
},
{
  "id": "hyperbolictriangleineqexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolictriangleineqexer",
  "type": "Exercise",
  "number": "3.3.6.4",
  "title": "The triangle inequality for the hyperbolic metric.",
  "body": "The triangle inequality for the hyperbolic metric Show that for all in using the outline below.  Show that the triangle inequality holds with strict equality when are collinear and is between and . Suggestion: This is a straightforward computation using the cross ratio expressions for the values of .  Show that the triangle inequality holds with strict inequality when are collinear and is not between and .  Let lie on a hyperbolic line , let , let be a line through perpendicular to (this line exists by ), and let be the point of intersection of . Show that . Suggestion: apply that takes and takes . Let if and let if . Let . See .  Given arbitrary , apply a transformation to send and to a nonnegative real point. Drop a perpendicular from to the real line, say, to . Apply results from the previous steps of this outline.    "
},
{
  "id": "hyperbolic_tri_ineq_fig",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolic_tri_ineq_fig",
  "type": "Figure",
  "number": "3.3.26",
  "title": "",
  "body": "  "
},
{
  "id": "upperhalfplanetransfpropexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#upperhalfplanetransfpropexer",
  "type": "Exercise",
  "number": "3.3.6.5",
  "title": "",
  "body": "Prove .   For the only if direction, apply to the cline , and conclude that must send the real line to itself. Set to be the preimages under of , and then use . For the if direction, suppose has the given form. Let and show that .  "
},
{
  "id": "upperhalfplanelengthexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#upperhalfplanelengthexer",
  "type": "Exercise",
  "number": "3.3.6.6",
  "title": "Length integral in the upper half-plane model.",
  "body": "Length integral in the upper half-plane model This exercise is to establish . The strategy is to obtain the differential expression for a curve with , , and using the following sequence of steps. First, map in to in using a transformation that preserves distance.  Using the analysis we used to get the disk model length integral formula , we have where .  Translate the above expression in terms of , and show that the differential approximation is .  Complete the exercise parts below to carry out the strategy just outlined.  Show that takes to .  Let and . Show that for some real .  Let . Show that     "
},
{
  "id": "upperhalfplaneareaintformulaexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#upperhalfplaneareaintformulaexer",
  "type": "Exercise",
  "number": "3.3.6.7",
  "title": "Area integral in the upper half-plane model.",
  "body": "Area integral in the upper half-plane model Adapt the argument in the paragraph preceding the disk model area integral to establish the upper half-plane area integral .  "
},
{
  "id": "hyperbolic_triangle_area_fig",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolic_triangle_area_fig",
  "type": "Figure",
  "number": "3.3.27",
  "title": "",
  "body": " Hyperbolic triangle    "
},
{
  "id": "doubasymptriareaexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#doubasymptriareaexer",
  "type": "Exercise",
  "number": "3.3.6.8",
  "title": "Area of a doubly-asymptotic triangle.",
  "body": "Area of a doubly-asymptotic triangle A triangle with one vertex in and two vertices on the unit circle, connected by arcs of circles that are orthogonal to the unit circle, is called a doubly-asymptotic doubly-asymptotic hyperbolic triangle hyperbolic triangle. Examples are , , and in . Explain why any doubly-asymptotic triangle in the upper half-plane is congruent to the one shown in for some angle .  Now use the integration formula for the upper half-plane model to show that the area of the doubly-asymptotic triangle with angle (at the vertex interior to ) is .    Doubly-asymptotic hyperbolic triangle in the upper half-plane with vertices with on the upper half of the unit circle     "
},
{
  "id": "asympngonareaexer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#asympngonareaexer",
  "type": "Exercise",
  "number": "3.3.6.9",
  "title": "Area of an asymptotic <span class=\"process-math\">\\(n\\)<\/span>-gon.",
  "body": "Area of an asymptotic -gon A polygon with vertices on the unit circle, connected by arcs of circles that are orthogonal to the unit circle, is called an asymptotic asymptotic -gon in hyperbolic space  -gon. An example of an asymptotic hexagon is the figure with vertices connected by the colored hyperbolic lines in . Show that the area of an asymptotic -gon is .  Partition the asymptotic -gon into doubly-asymptotic triangles.  "
},
{
  "id": "hyperbolic_triangle_area_exer",
  "level": "2",
  "url": "hyperbolicgeomsect.html#hyperbolic_triangle_area_exer",
  "type": "Exercise",
  "number": "3.3.6.10",
  "title": "Area of a hyperbolic triangle.",
  "body": "Area of a hyperbolic triangle Let be a hyperbolic triangle. Extend the three sides , , to six points on the unit circle. See . Use a partition of the asymptotic hexagon whose vertices are these six points to show that the area of is   Partition the asymptotic hexagon with vertices . Start with the six overlapping doubly-asymptotic triangles whose bases are colored arcs and whose vertex in is whichever of matches the color of the base. For example, the two red doubly-asymptotic triangles are and .  "
},
{
  "id": "elliptic_geometry_section",
  "level": "1",
  "url": "elliptic_geometry_section.html",
  "type": "Section",
  "number": "3.4",
  "title": "Elliptic geometry",
  "body": " Elliptic geometry   Elliptic geometry is the geometry of the sphere (the 2-dimensional surface of a 3-dimensional solid ball), where congruence transformations are the rotations of the sphere about its center.  We will work with three models for elliptic geometry: one based on quaternions, one based on rotations of the sphere, and another that is a subgeometry of Möbius geometry. Using the natural identification of the pure quaternions with , we will write to denote the set of unit pure quaternions, that is, We begin by establishing some basic facts about the relevant transformation groups.   The group of unit quaternions  Recall from that is the set of quaternions of modulus 1. In fact, is a group.  Show that is a group.    Recall that the map sends to the matrix . The image of under is the matrix group special unitary group groups, list of special unitary group   the special unitary group  called the special unitary group. Restricting the domain of to and restricting the codomain of to is an isomorphism of groups   Show that is a group. Show that is a homomorphism.  It is not necessary to perform any new computation to show that is a homomorphism. Instead, use .    The action of a unit quaternion as a rotation on (see ) takes the sphere to itself. The action of the group on defines a model of elliptic geometry.  The quaternion model  elliptic geometry quaternion model  geometries, list of  elliptic geometry quaternion model of elliptic geometry is .  Show that the map given by is a group action.     The group of rotations of the 2-sphere  Let  rotation about the axis by angle   denote the rotation of about the axis given by a unit vector by an angle . We use the standard orientation, so that a positive value of is a counterclockwise rotation of the plane orthogonal to , as viewed from above where points in the up direction. See .    The rotation about the vector by the angle     Notation convention: For readability and convenience, we write to denote rotations by radians about the standard basis vectors , respectively.  We will write to denote the set of all rotations. To see why the set is a group For the purpose of a self-contained exposition based on elementary geometry, using only complex and quaternion algebra, we do not utilize the fact that is the group of orthogonal transformations of with determinant 1. under the operation of composition, consider the map given by established by . The fact that (see ) implies that the composition of two rotations is a rotation. The remaining group properties are straightforward. Once we have proved that is a group, the same equation shows that the map is a homomorphism of groups . The kernel of this homomorphism is . This establishes an isomorphism   Complete the details to show that is a group. Show that the kernel of the homomorphism given by is .  Use .    The spherical model  elliptic geometry spherical model  geometries, list of  elliptic geometry spherical model of elliptic geometry is .  We conclude with a useful fact about constructing arbitrary rotations by composing rotations from a specific set elementary types, namely, rotations about the -axis by arbitrary angles, and rotations about the -axis by radians. We start with a Lemma that shows how to do this for -axis rotations.  Rotations about the -axis An arbitrary rotation about the -axis is a composition of a rotations about the -axis by radians with a rotation about the -axis. Specifically, we have the following.   Visualize! You can also verify by checking that both sides of yield the same result when evaluated on the three standard basis vectors. Yet another proof is to do a quaternion computation.    Generators for   The set is a generating set for . This means that any rotation may be written as a composition of rotations about the -axis and rotations about the -axis by radians.   Consider a model of the sphere printed with a map of the world (i.e., a geographic globe) in such a way that the north pole is on top of the sphere and Greenwich, England (at zero degrees longitude) is in the -plane. The sphere in the upper left of depicts this start position of the north pole , Greenwich , and the great circle that is the intersection of the sphere with the -plane ( is shown in red in all four spheres for reference). Now let be an arbitrary rotation. The sphere in the upper right of shows how  , , and are transformed by . The rest of the diagram shows how we can write as a composition of rotations by putting the north pole back on top and putting zero degrees back in place , as follows. From the upper right in the diagram, we put the north pole back by first performing a rotation about the -axis that brings the north pole into the -plane. Next, we perform the rotation about the -axis (use the Lemma) to bring the north pole back to the top. Finally, we perform a rotation to bring Greenwich back home in the -plane. Reading clockwise from the upper left of the diagram, the sequence of transformations takes the north pole through the sequence . Meanwhile, traces the path while the great circle is transformed in the sequence This leads to the decomposition .   Decomposition of the rotation        The elliptic subgroup of the Möbius group    Let  the elliptic group  denote the group of transformations of that are conjugate to rotations of via the stereographic projection . The group is called the elliptic group elliptic group  groups, list of elliptic group  . It is easy to check that the map given by is an isomorphism of groups, so we have   Show that is indeed a group. Show that is a group isomorphism .    Exercises in show that the Möbius transformation given by (see ) and that is the Möbius transformation given by (see ). The fact ( ) that rotations of the form generate implies that the Möbius transformations and generate . Therefore is in fact a subgroup of the Möbius group.  The Möbius subgeometry model  elliptic geometry Möbius subgeometry model   geometries, list of elliptic geometry Möbius subgeometry model  of elliptic geometry is .  We can say more about the specific form of elements in in terms of the group homomorphism that sends the matrix to the Möbius transformation (see ). Observe that the transformations are images of elements of the group (see ). Because generate , it follows that every element of is the image under of an element of .  Let denote the matrices , respectively. Verify that are indeed elements of . Verify and . Explain the final comment in the paragraph above. Why does it follow that every element of is the image of an element of ?    Thus we have proved the following explicit formula for elements of .  Formula for transformations in the elliptic group  A map is an element of if and only if may be written in the form for some with .    Setting and , we have the following alternative form for .    Circles in and clines in   A circle in is a circle in a plane intersecting . A great circle great circle is the intersection of with a plane through the origin. In elliptic geometry, a great circle is called an elliptic straight line because the path of shortest length connecting two given points in is an arc of a great circle. Circles in that are not great circles are called elliptic cycles . Elliptic straight lines and elliptic cycles in the Möbius subgeometry model are stereographic projections of elliptic straight lines and elliptic cycles in the spherical model. It turns out that elliptic straight lines and elliptic cycles in are in fact clines. Here is the statement and proof.  Stereographic projection takes circles to clines   Let be a circle that is the intersection of with a plane in . If contains the north pole of , then is a Euclidean straight line in . Otherwise, is a circle in .   Proof sketch: The statement about the case when contains the north pole is geometrically clear. For the case when does not contain , choose a rotation of that takes some point on to the north pole. Again, let be the conjugate element in . It is clear that takes to a circle, that takes to a Euclidean straight line, and that takes to a cline (because is a Möbius transformation!). Thus is a cline. Because is not on , it must be that is not on , so is a circle in .     Angles and orientation on   The standard orientation for angles on (see ) is also called the outward-pointing normal orientation. The standard orientation measures angles from the viewpoint of an observer standing on the outside of the sphere. The inward-pointing normal orientation is the reverse orientation that measures angles from the viewpoint of an observer walking on the inside of the sphere. See .   Two orientations on the sphere: oriented angle is positive viewed from the outward-pointing normal vector , but is negative viewed from the inward-pointing vector .    Stereographic projection is conformal  Stereographic projection preserves oriented angles with respect to the inward-pointing normal orientation.   Proof sketch: Begin with the special case of curves that intersect at the south pole . The lines that are tangent to at lie in planes that contain the south pole and the origin. The tangents also lie in the plane tangent to the sphere at the south pole. It is clear that the lines tangent to at are straight lines that intersect at the origin. The angle made by is the same as the angle made by the planes , but with inward-normal orientation! See . Now suppose two curves intersect at . Choose a rotation of that takes to the south pole, and let be the conjugate element in . It is clear that and are conformal (because is a Möbius transformation!). Now the fact that is conformal at implies that is conformal at .   Stereographic projection is conformal at .       Elliptic length and area  The distance between points on is the length of the arc of a great circle that connects them. Because the sphere has radius 1, the arc length is the same as the radian measure of the angle , where is the origin. From vector calculus, we have the following dot product formula. Solving for , we obtain the formula for the distance between points in .   To transfer the metric to by stereographic projection means that we define the elliptic metric on by the following.   The elliptic metric is invariant under the action of the elliptic group. That is, we have for all and for all .    In order to obtain a formula for computing , we follow the same procedure for hyperbolic distance. First, we find the distance , where . Let and let . Let , let , let and let (see ). It is a simple exercise to show that , so that we have    Transferring the natural metric on to via stereographic projection.    Show that in .    For the general case, let . Because and let be the transformation in (using the form ) that sends and . Applying , we have the elliptic distance formula in . Now let be a parametric curve in . Using the same argument as in the paragraph preceding the hyperbolic length integral formula , using the first order Taylor approximation and making the appropriate changes, we arrive at the elliptic length integral formula.   Show that the first order Taylor approximation for is . Complete the details of modifying the derivation of the hyperbolic length integral formula to obtain the elliptic length integral formula.    Find the length of the elliptic cycle parameterized by for , where .   Using the same argument as in the paragraph preceding the hyperbolic area integral formula , using the elliptic length differential in place of the hyperbolic length differential and making the appropriate changes, we obtain the elliptic area integral formula.   Find the area of the elliptic disk , for .     Show that the three models of elliptic geometry are equivalent.    Prove .    Area of an elliptic triangle  The following sequence of exercises establishes the area formula for elliptic triangles.   Area of an elliptic 2-gon  An elliptic 2-gon elliptic geometry 2-gon  is a figure with two vertices connected by two elliptic line segments. In , any 2-gon is congruent to a set of the form for some in the range . See . Use an area integral in to show that the area of is . Verify that this is the right answer using a picture of .   2-gons in and .     Area of an elliptic triangle Let be an elliptic triangle. Let denote the great circles that extend the sides of the triangle. See . Explain why are endpoints of the same diameter, that is, endpoints of a diameter of or their stereographic projections in .  Explain why has the same area as , even though the two triangles are not necessarily congruent! (Note that the interior of is the exterior of the three great circles, that is, on the side that contains the point .) Hint: What does part (a) of this problem imply about the relationship between points and on for ?  Let denote the interior of the region shown in the figure on the right in . Explain why the area of is Suggestion: Decompose using overlapping 2-gons.  Let denote the exterior of the region , that is, . Explain why the area of is Suggestion: Decompose into overlapping 2-gons.  Explain why the area of elliptic triangle is            "
},
{
  "id": "unitquatisgpexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#unitquatisgpexer",
  "type": "Checkpoint",
  "number": "3.4.1",
  "title": "",
  "body": "Show that is a group.  "
},
{
  "id": "su2isgpisounitquitexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#su2isgpisounitquitexer",
  "type": "Checkpoint",
  "number": "3.4.2",
  "title": "",
  "body": "Show that is a group. Show that is a homomorphism.  It is not necessary to perform any new computation to show that is a homomorphism. Instead, use .  "
},
{
  "id": "elliptic_geometry_section-3-7",
  "level": "2",
  "url": "elliptic_geometry_section.html#elliptic_geometry_section-3-7",
  "type": "Definition",
  "number": "3.4.3",
  "title": "",
  "body": "The quaternion model  elliptic geometry quaternion model  geometries, list of  elliptic geometry quaternion model of elliptic geometry is . "
},
{
  "id": "unitquatactionons2exer",
  "level": "2",
  "url": "elliptic_geometry_section.html#unitquatactionons2exer",
  "type": "Checkpoint",
  "number": "3.4.4",
  "title": "",
  "body": "Show that the map given by is a group action.  "
},
{
  "id": "vectangrot_fig",
  "level": "2",
  "url": "elliptic_geometry_section.html#vectangrot_fig",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": " The rotation about the vector by the angle    "
},
{
  "id": "s2rotisgpexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#s2rotisgpexer",
  "type": "Checkpoint",
  "number": "3.4.6",
  "title": "",
  "body": "Complete the details to show that is a group. Show that the kernel of the homomorphism given by is .  Use .  "
},
{
  "id": "rotgp-7",
  "level": "2",
  "url": "elliptic_geometry_section.html#rotgp-7",
  "type": "Definition",
  "number": "3.4.7",
  "title": "",
  "body": "The spherical model  elliptic geometry spherical model  geometries, list of  elliptic geometry spherical model of elliptic geometry is . "
},
{
  "id": "rotgp-9",
  "level": "2",
  "url": "elliptic_geometry_section.html#rotgp-9",
  "type": "Lemma",
  "number": "3.4.8",
  "title": "Rotations about the <span class=\"process-math\">\\(y\\)<\/span>-axis.",
  "body": "Rotations about the -axis An arbitrary rotation about the -axis is a composition of a rotations about the -axis by radians with a rotation about the -axis. Specifically, we have the following.   Visualize! You can also verify by checking that both sides of yield the same result when evaluated on the three standard basis vectors. Yet another proof is to do a quaternion computation.   "
},
{
  "id": "rotgenprop",
  "level": "2",
  "url": "elliptic_geometry_section.html#rotgenprop",
  "type": "Proposition",
  "number": "3.4.9",
  "title": "Generators for <span class=\"process-math\">\\(\\Rot(S^2)\\)<\/span>.",
  "body": "Generators for   The set is a generating set for . This means that any rotation may be written as a composition of rotations about the -axis and rotations about the -axis by radians.   Consider a model of the sphere printed with a map of the world (i.e., a geographic globe) in such a way that the north pole is on top of the sphere and Greenwich, England (at zero degrees longitude) is in the -plane. The sphere in the upper left of depicts this start position of the north pole , Greenwich , and the great circle that is the intersection of the sphere with the -plane ( is shown in red in all four spheres for reference). Now let be an arbitrary rotation. The sphere in the upper right of shows how  , , and are transformed by . The rest of the diagram shows how we can write as a composition of rotations by putting the north pole back on top and putting zero degrees back in place , as follows. From the upper right in the diagram, we put the north pole back by first performing a rotation about the -axis that brings the north pole into the -plane. Next, we perform the rotation about the -axis (use the Lemma) to bring the north pole back to the top. Finally, we perform a rotation to bring Greenwich back home in the -plane. Reading clockwise from the upper left of the diagram, the sequence of transformations takes the north pole through the sequence . Meanwhile, traces the path while the great circle is transformed in the sequence This leads to the decomposition .   Decomposition of the rotation      "
},
{
  "id": "ellipticsubgpssubsec-3",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticsubgpssubsec-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elliptic group "
},
{
  "id": "ellipticgpisgpexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticgpisgpexer",
  "type": "Checkpoint",
  "number": "3.4.11",
  "title": "",
  "body": "Show that is indeed a group. Show that is a group isomorphism .  "
},
{
  "id": "ellipticsubgpssubsec-6",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticsubgpssubsec-6",
  "type": "Definition",
  "number": "3.4.12",
  "title": "",
  "body": "The Möbius subgeometry model  elliptic geometry Möbius subgeometry model   geometries, list of elliptic geometry Möbius subgeometry model  of elliptic geometry is . "
},
{
  "id": "ellipticgpgenexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticgpgenexer",
  "type": "Checkpoint",
  "number": "3.4.13",
  "title": "",
  "body": "Let denote the matrices , respectively. Verify that are indeed elements of . Verify and . Explain the final comment in the paragraph above. Why does it follow that every element of is the image of an element of ?  "
},
{
  "id": "ellipticgpissu2imageprop",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticgpissu2imageprop",
  "type": "Proposition",
  "number": "3.4.14",
  "title": "Formula for transformations in the elliptic group.",
  "body": "Formula for transformations in the elliptic group  A map is an element of if and only if may be written in the form for some with .   "
},
{
  "id": "elliptic_geometry_section-6-2",
  "level": "2",
  "url": "elliptic_geometry_section.html#elliptic_geometry_section-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "great circle elliptic straight line elliptic cycles "
},
{
  "id": "elliptic_geometry_section-6-3",
  "level": "2",
  "url": "elliptic_geometry_section.html#elliptic_geometry_section-6-3",
  "type": "Proposition",
  "number": "3.4.15",
  "title": "Stereographic projection takes circles to clines.",
  "body": "Stereographic projection takes circles to clines   Let be a circle that is the intersection of with a plane in . If contains the north pole of , then is a Euclidean straight line in . Otherwise, is a circle in .   Proof sketch: The statement about the case when contains the north pole is geometrically clear. For the case when does not contain , choose a rotation of that takes some point on to the north pole. Again, let be the conjugate element in . It is clear that takes to a circle, that takes to a Euclidean straight line, and that takes to a cline (because is a Möbius transformation!). Thus is a cline. Because is not on , it must be that is not on , so is a circle in .   "
},
{
  "id": "two_orientations_fig",
  "level": "2",
  "url": "elliptic_geometry_section.html#two_orientations_fig",
  "type": "Figure",
  "number": "3.4.16",
  "title": "",
  "body": " Two orientations on the sphere: oriented angle is positive viewed from the outward-pointing normal vector , but is negative viewed from the inward-pointing vector .   "
},
{
  "id": "elliptic_geometry_section-7-4",
  "level": "2",
  "url": "elliptic_geometry_section.html#elliptic_geometry_section-7-4",
  "type": "Corollary",
  "number": "3.4.17",
  "title": "Stereographic projection is conformal.",
  "body": "Stereographic projection is conformal  Stereographic projection preserves oriented angles with respect to the inward-pointing normal orientation.   Proof sketch: Begin with the special case of curves that intersect at the south pole . The lines that are tangent to at lie in planes that contain the south pole and the origin. The tangents also lie in the plane tangent to the sphere at the south pole. It is clear that the lines tangent to at are straight lines that intersect at the origin. The angle made by is the same as the angle made by the planes , but with inward-normal orientation! See . Now suppose two curves intersect at . Choose a rotation of that takes to the south pole, and let be the conjugate element in . It is clear that and are conformal (because is a Möbius transformation!). Now the fact that is conformal at implies that is conformal at .   Stereographic projection is conformal at .     "
},
{
  "id": "elliptic_metric_is_invariant",
  "level": "2",
  "url": "elliptic_geometry_section.html#elliptic_metric_is_invariant",
  "type": "Proposition",
  "number": "3.4.19",
  "title": "",
  "body": "The elliptic metric is invariant under the action of the elliptic group. That is, we have for all and for all .   "
},
{
  "id": "elliptic_distance_fig",
  "level": "2",
  "url": "elliptic_geometry_section.html#elliptic_distance_fig",
  "type": "Figure",
  "number": "3.4.20",
  "title": "",
  "body": " Transferring the natural metric on to via stereographic projection.   "
},
{
  "id": "ellipticdistlemmaexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticdistlemmaexer",
  "type": "Checkpoint",
  "number": "3.4.21",
  "title": "",
  "body": "Show that in .  "
},
{
  "id": "ellipticdsexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticdsexer",
  "type": "Checkpoint",
  "number": "3.4.22",
  "title": "",
  "body": "Show that the first order Taylor approximation for is . Complete the details of modifying the derivation of the hyperbolic length integral formula to obtain the elliptic length integral formula.  "
},
{
  "id": "ellipticcircumexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticcircumexer",
  "type": "Checkpoint",
  "number": "3.4.23",
  "title": "",
  "body": "Find the length of the elliptic cycle parameterized by for , where . "
},
{
  "id": "ellipticdiskareaexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticdiskareaexer",
  "type": "Checkpoint",
  "number": "3.4.24",
  "title": "",
  "body": "Find the area of the elliptic disk , for . "
},
{
  "id": "threeellipticmodelssameexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#threeellipticmodelssameexer",
  "type": "Exercise",
  "number": "3.4.7.1",
  "title": "",
  "body": "Show that the three models of elliptic geometry are equivalent.  "
},
{
  "id": "ellipticmetinvexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#ellipticmetinvexer",
  "type": "Exercise",
  "number": "3.4.7.2",
  "title": "",
  "body": "Prove .  "
},
{
  "id": "twogonareaexer",
  "level": "2",
  "url": "elliptic_geometry_section.html#twogonareaexer",
  "type": "Exercise",
  "number": "3.4.7.3",
  "title": "Area of an elliptic 2-gon.",
  "body": "Area of an elliptic 2-gon  An elliptic 2-gon elliptic geometry 2-gon  is a figure with two vertices connected by two elliptic line segments. In , any 2-gon is congruent to a set of the form for some in the range . See . Use an area integral in to show that the area of is . Verify that this is the right answer using a picture of .   2-gons in and .    "
},
{
  "id": "elliptic_triangle_area_exer",
  "level": "2",
  "url": "elliptic_geometry_section.html#elliptic_triangle_area_exer",
  "type": "Exercise",
  "number": "3.4.7.4",
  "title": "Area of an elliptic triangle.",
  "body": "Area of an elliptic triangle Let be an elliptic triangle. Let denote the great circles that extend the sides of the triangle. See . Explain why are endpoints of the same diameter, that is, endpoints of a diameter of or their stereographic projections in .  Explain why has the same area as , even though the two triangles are not necessarily congruent! (Note that the interior of is the exterior of the three great circles, that is, on the side that contains the point .) Hint: What does part (a) of this problem imply about the relationship between points and on for ?  Let denote the interior of the region shown in the figure on the right in . Explain why the area of is Suggestion: Decompose using overlapping 2-gons.  Let denote the exterior of the region , that is, . Explain why the area of is Suggestion: Decompose into overlapping 2-gons.  Explain why the area of elliptic triangle is       "
},
{
  "id": "projgeomsect",
  "level": "1",
  "url": "projgeomsect.html",
  "type": "Section",
  "number": "3.5",
  "title": "Projective geometry",
  "body": " Projective geometry   Early motivation for the development of projective geometry came from artists trying to solve practical problems in perspective drawing and painting. In this section, we present a modern Kleinian version of projective geometry.  Throughout this section, is a field, is a vector space over , is the projective space, and is the projective transformation group. See for definitions and details. We will write for the projective transformation that is the equivalence class of the linear transformation of .   Projective points, lines, and flats  Points in projective space correspond bijectively to 1-dimensional subspaces of via The set of 1-dimensional subspaces in , denoted , is an alternative model space for projective geometry. We will usually denote points in projective space using capital letters, such as , , etc.  A line projective geometry line in projective space  in projective space is a set of the form for some 2-dimensional subspace in . Thus, projective lines correspond bijectively to 2-dimensional subspaces of via The set of 2-dimensional subspaces in is denoted . Points in projective space are called collinear projective geometry collinear projective points  if they lie together on a projective line. We will usually denote projective lines using lower case letters, such as , , etc.  There is an offset by 1 in the use of the word dimension in regards to subsets of and the corresponding subspace in . In general, a -dimensional flat projective geometry -dimensional flat in is a set of the form , where denotes the set of -dimensional subspaces of . The set is called the Grassmannian of -dimensional subspaces of , named in honor of Hermann Grassmann. Flats are also called subspaces in projective space, even though projective space is not a vector space.  Points are said to be in general position if the vectors are independent in .   Coordinates  For the remainder of this section, we consider . For readability, we will write (rather than the more cumbersome ) to denote the point in projective space that is the projective equivalence class of the point in . The entries are called homogeneous coordinates projective geometry homogeneous coordinates  of . If , then The numbers for are called inhomogeneous coordinates projective geometry inhomogeneous coordinates  for . The degrees of freedom that are apparent in inhomogeneous coordinates explain why is called -dimensional. Many texts write , , or simply when is understood, to denote .   Freedom in projective transformations  In an -dimensional vector space, any independent vectors can be mapped to any other set of independent vectors by a linear transformation. Therefore it seems a little surprising that in -dimensional projective space , it is possible to map any set of points to any other set of points, provided both sets of points meet sufficient independence conditions. This subsection gives the details of this result, called the Fundamental Theorem of Projective Geometry.  Let denote the standard basis vectors for and let . Let be another basis for and let be nonzero scalars. Let be the linear transformation of given by for . Projectively, sends and .  Now suppose there is another map that agrees with on the points . Then fixes all the points . This means that for some nonzero scalars and that for some . This implies so we have . Therefore is the identity transformation, so . We have just proved the following existence and uniqueness lemma.  Let be an independent set of vectors in and let for some nonzero scalars . There exists a unique projective transformation that maps for .    Fundamental Theorem of Projective Geometry  Fundamental Theorem of Projective Geometry   Let be a set of points in such that all subsets of size are in general position. Let be another such set. There exists a unique projective transformation that maps , .     The real projective plane  The remainder of this section is devoted to the planar geometry called the real projective plane projective geometry real projective plane . It is of historical interest because of its early practical use by artists. Lines through the origin in model sight lines in the real world as seen from an eye placed at the origin. A plane that does not pass through the origin models the picture plane of the artist's canvas. shows a woodcut by Albrecht Dürer that illustrates a perspective machine gadget used by 16th century artists to put the projective model into practice for image making.   Man drawing a lute , Albrecht Dürer, 1525.    A two dimensional subspace in is specified by a normal vector via the equation , that is, a point lies on with normal vector if and only if . Any nonzero multiple of is also a normal vector for , so the set of 2-dimensional subspaces in is in one-to-one correspondence with . We will write to denote the projective line whose corresponding 2-dimensional subspace in has normal vectors proportional to . Beware the overloaded notation! Whether the equivalence class of a vector in denotes a projective point or a projective line has to be specified.  The equation makes sense projectively . This means that if for vectors , then , even though the value of the dot product is not well-defined for projective equivalence classes! Thus we will write for a projective line and a projective point , to mean , and we make the following interpretation of the dot product as an incidence relation in . Given two independent vectors in , their cross product is a normal vector for the 2-dimensional space spanned by . Given two 2-dimensional subspaces in with normal vectors , the cross product is a vector that lies along the 1-dimensional subspace . The bilinearity of cross product implies that cross product is well-defined on projective classes, i.e., we can write . Thus we have the following.  Given two points in , there is a unique projective line that contains them. Given two lines in , there is a unique projective point in their intersection .      Use to prove the Fundamental Theorem of Projective Geometry ( ).    Coordinate charts and inhomogeneous coordinates  To facilitate thinking about the interplay between the projective geometry and the geometry of (rather than !) it is useful to have a careful definition for taking inhomogeneous coordinates in position . Here it is: Let be the subset of of points whose homogeneous coordinate is nonzero. Let be given by  The one-sided inverse given by (where the circumflex hat indicates a deleted item from a sequence) is called the -th coordinate chart projective geometry coordinate chart  for . What is the map that results from applying the -th coordinate chart followed by taking homogeneous coordinates in position 1?    Möbius geometry is projective geometry  Show that Möbius geometry and the projective geometry are equivalent via the map given by Comment: Observe that is an extension of given by (defined in ).   Cross ratio The projective space is called the projective line projective geometry projective line  ). The map , given by (defined in , but where may be any field, with ) takes the points in to the points in , respectively. Let denote the unique projective transformation that takes to . The cross ratio projective geometry cross ratio  cross ratio of projective geometry  is defined to be .  Show that this definition of cross ratio in projective geometry corresponds to the cross ratio of Möbius geometry for the case , via the map , that is, show that the following holds.  Show that where is the determinant of the matrix , where .        Condition for collinearity in  Let be vectors in , and let be the matrix Show that are collinear in if and only if .     Pappus' Theorem    The following is a famous theorem of classical geometry.  Pappus' Theorem . Pappus' Theorem  Let be three distinct collinear points in . Let be another three distinct collinear points on a different line. Let be the intersection points , , . Then points are collinear. See .   Follow the outline below to prove Pappus' Theorem under the additional assumption that no three of are collinear. Applying the Fundamental Theorem of Projective Geometry, we may assume , , , and .  Check that and .  Explain why it follows that and for some .  Explain why and .  Explain why .  Observe that all lie on .     For the second bullet point, use the fact that lies on to get . For the third bullet point, use known coordinates for to get coordinates for lines . Then . Use a similar process for . Four the fourth bullet point, use .    Quadrics A quadric projective geometry quadric  in is a set of points whose homogeneous coordinates satisfy an equation of the form A quadric in is called a conic projective geometry conic  . Explain why is a valid definition of a set of points in .  Consider the conic given by What are the figures in that result from taking inhomogeneous coordinates (see ) on in positions ?       "
},
{
  "id": "projgeomsect-3-3",
  "level": "2",
  "url": "projgeomsect.html#projgeomsect-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "line collinear "
},
{
  "id": "projgeomsect-3-4",
  "level": "2",
  "url": "projgeomsect.html#projgeomsect-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-dimensional flat Grassmannian "
},
{
  "id": "projgeomsect-3-5",
  "level": "2",
  "url": "projgeomsect.html#projgeomsect-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general position "
},
{
  "id": "projgeomsect-4-2",
  "level": "2",
  "url": "projgeomsect.html#projgeomsect-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous coordinates inhomogeneous coordinates "
},
{
  "id": "fundthmprojgeomlemma",
  "level": "2",
  "url": "projgeomsect.html#fundthmprojgeomlemma",
  "type": "Lemma",
  "number": "3.5.1",
  "title": "",
  "body": "Let be an independent set of vectors in and let for some nonzero scalars . There exists a unique projective transformation that maps for .   "
},
{
  "id": "fundthmprojgeom",
  "level": "2",
  "url": "projgeomsect.html#fundthmprojgeom",
  "type": "Theorem",
  "number": "3.5.2",
  "title": "Fundamental Theorem of Projective Geometry.",
  "body": "Fundamental Theorem of Projective Geometry  Fundamental Theorem of Projective Geometry   Let be a set of points in such that all subsets of size are in general position. Let be another such set. There exists a unique projective transformation that maps , .   "
},
{
  "id": "projgeomsect-6-2",
  "level": "2",
  "url": "projgeomsect.html#projgeomsect-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real projective plane "
},
{
  "id": "durerpicture",
  "level": "2",
  "url": "projgeomsect.html#durerpicture",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " Man drawing a lute , Albrecht Dürer, 1525.   "
},
{
  "id": "projgeomsect-6-6",
  "level": "2",
  "url": "projgeomsect.html#projgeomsect-6-6",
  "type": "Proposition",
  "number": "3.5.4",
  "title": "",
  "body": "Given two points in , there is a unique projective line that contains them. Given two lines in , there is a unique projective point in their intersection .   "
},
{
  "id": "fundthmprojgeompfexer",
  "level": "2",
  "url": "projgeomsect.html#fundthmprojgeompfexer",
  "type": "Exercise",
  "number": "3.5.5.1",
  "title": "",
  "body": "Use to prove the Fundamental Theorem of Projective Geometry ( ).  "
},
{
  "id": "chartexer",
  "level": "2",
  "url": "projgeomsect.html#chartexer",
  "type": "Exercise",
  "number": "3.5.5.2",
  "title": "Coordinate charts and inhomogeneous coordinates.",
  "body": "Coordinate charts and inhomogeneous coordinates  To facilitate thinking about the interplay between the projective geometry and the geometry of (rather than !) it is useful to have a careful definition for taking inhomogeneous coordinates in position . Here it is: Let be the subset of of points whose homogeneous coordinate is nonzero. Let be given by  The one-sided inverse given by (where the circumflex hat indicates a deleted item from a sequence) is called the -th coordinate chart projective geometry coordinate chart  for . What is the map that results from applying the -th coordinate chart followed by taking homogeneous coordinates in position 1?  "
},
{
  "id": "mobiusgeomisprojectivegeom",
  "level": "2",
  "url": "projgeomsect.html#mobiusgeomisprojectivegeom",
  "type": "Exercise",
  "number": "3.5.5.3",
  "title": "Möbius geometry is projective geometry.",
  "body": "Möbius geometry is projective geometry  Show that Möbius geometry and the projective geometry are equivalent via the map given by Comment: Observe that is an extension of given by (defined in ). "
},
{
  "id": "projcrossratioexer",
  "level": "2",
  "url": "projgeomsect.html#projcrossratioexer",
  "type": "Exercise",
  "number": "3.5.5.4",
  "title": "Cross ratio.",
  "body": "Cross ratio The projective space is called the projective line projective geometry projective line  ). The map , given by (defined in , but where may be any field, with ) takes the points in to the points in , respectively. Let denote the unique projective transformation that takes to . The cross ratio projective geometry cross ratio  cross ratio of projective geometry  is defined to be .  Show that this definition of cross ratio in projective geometry corresponds to the cross ratio of Möbius geometry for the case , via the map , that is, show that the following holds.  Show that where is the determinant of the matrix , where .     "
},
{
  "id": "rp2collinearconditionexer",
  "level": "2",
  "url": "projgeomsect.html#rp2collinearconditionexer",
  "type": "Exercise",
  "number": "3.5.5.5",
  "title": "Condition for collinearity in <span class=\"process-math\">\\(\\R\\Proj_2\\)<\/span>.",
  "body": "Condition for collinearity in  Let be vectors in , and let be the matrix Show that are collinear in if and only if .  "
},
{
  "id": "pappus_theorem_fig",
  "level": "2",
  "url": "projgeomsect.html#pappus_theorem_fig",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": " Pappus' Theorem   "
},
{
  "id": "pappusthmexer",
  "level": "2",
  "url": "projgeomsect.html#pappusthmexer",
  "type": "Exercise",
  "number": "3.5.5.6",
  "title": "",
  "body": "The following is a famous theorem of classical geometry.  Pappus' Theorem . Pappus' Theorem  Let be three distinct collinear points in . Let be another three distinct collinear points on a different line. Let be the intersection points , , . Then points are collinear. See .   Follow the outline below to prove Pappus' Theorem under the additional assumption that no three of are collinear. Applying the Fundamental Theorem of Projective Geometry, we may assume , , , and .  Check that and .  Explain why it follows that and for some .  Explain why and .  Explain why .  Observe that all lie on .     For the second bullet point, use the fact that lies on to get . For the third bullet point, use known coordinates for to get coordinates for lines . Then . Use a similar process for . Four the fourth bullet point, use .  "
},
{
  "id": "quadricsexer",
  "level": "2",
  "url": "projgeomsect.html#quadricsexer",
  "type": "Exercise",
  "number": "3.5.5.7",
  "title": "Quadrics.",
  "body": "Quadrics A quadric projective geometry quadric  in is a set of points whose homogeneous coordinates satisfy an equation of the form A quadric in is called a conic projective geometry conic  . Explain why is a valid definition of a set of points in .  Consider the conic given by What are the figures in that result from taking inhomogeneous coordinates (see ) on in positions ?    "
},
{
  "id": "geometry_extra_exer_section",
  "level": "1",
  "url": "geometry_extra_exer_section.html",
  "type": "Section",
  "number": "3.6",
  "title": "Additional exercises",
  "body": " Additional exercises    Euclidean subgroup of the Möbius group Let denote the subgroup of the Möbius group generated by rotations and translations, that is, transformations of the type for and for . The geometry is sometimes called Euclidean geometry . Is equivalent to the Euclidean geometry defined in ? Why or why not?    Elliptic geometry and spherical geometry Is elliptic geometry equivalent to spherical geometry defined in ? Why or why not?    Parallel displacements in hyperbolic geometry Let be an element of the hyperbolic group , with a single fixed point and normal form Show that must be a pure imaginary number, that is, there must be a real number such that .      Prove that all elements of the elliptic group are elliptic in the normal form sense, i.e., we have in the normal form expression Suggestion: First find the fixed points , then put in the normal form equation and solve for .    Alternative derivation of the formula for elliptic group elements  To obtain an explicit formula for elements of the elliptic group, we begin with a necessary condition. Let be the rotation of that lifts via stereographic projection. If are a pair of endpoints of a diameter of , then must also be a pair of endpoints of a diameter. establishes the condition that two complex numbers are stereographic projections of endpoints of a diameter if and only if . Thus we have the following necessary condition for . Now suppose that with . Solving the equation leads to and . Thus we conclude that has the following form. Carry out the computation to derive . Explain why there is no loss of generality by assuming .    Identifications of and with  The discussion of elliptic geometry ( ) establishes two ways to construct rotations from matrices. The purpose of this exercise is to reconcile these identifications. Given with , let us define the following objects, all parameterized by .  The above objects are organized along two sequences of mappings. The rotation is at the end of the quaternion path  and the rotation is at the end of the Möbius path  This problem is about comparing the rotations and (see ) and reconciling the difference. The angles of rotation are the same, but the axes are different, but only by a reordering of coordinates and a minus sign.   Axis and angle of rotation for quaternion and Möbius rotation constructions      axis of rotation   angle of rotation                   The exercises outlined below verify the values for in .  Use to justify the values for and for in .  Solve to show that one of the fixed points of is   Show that .  Show that where is given by . Here's one way to do this: evaluate both sides of on the three points . Explain why this is sufficient! Use quaternion multiplication to evaluate . For example, under the natural identification .  Here is one way to reconcile the quaternion path with the Möbius path . Let (the matrix is sometimes called the Hadamard matrix) and let denote the map . Show that the diagram in commutes. Hint: Notice that and that , and that .    The map is given by . The column of maps on the left is the Möbius path , and the column of maps on the right is the quaternion path .        Right triangle     Pythagorean Theorems Let be a right triangle with right angle with side lengths , , and so that the length of the hypotenuse is . See .  Prove the following identities.   The Hyperbolic Pythagorean Theorem Pythagorean Theorem Hyperbolic Pythagorean Theorem . Show that if is a hyperbolic triangle.  The Elliptic Pythagorean Theorem Pythagorean Theorem Elliptic Pythagorean Theorem . Show that if is an elliptic triangle.    Suggestion: Use a transformation to place at in or , with real and pure imaginary. Use the formula with for hyperbolic distance. Use the formula , with for elliptic distance. The identities from part (a) will be useful.     "
},
{
  "id": "euclidean2gpsexer",
  "level": "2",
  "url": "geometry_extra_exer_section.html#euclidean2gpsexer",
  "type": "Exercise",
  "number": "3.6.1",
  "title": "Euclidean subgroup of the Möbius group.",
  "body": "Euclidean subgroup of the Möbius group Let denote the subgroup of the Möbius group generated by rotations and translations, that is, transformations of the type for and for . The geometry is sometimes called Euclidean geometry . Is equivalent to the Euclidean geometry defined in ? Why or why not?  "
},
{
  "id": "elliptic2gpsexer",
  "level": "2",
  "url": "geometry_extra_exer_section.html#elliptic2gpsexer",
  "type": "Exercise",
  "number": "3.6.2",
  "title": "Elliptic geometry and spherical geometry.",
  "body": "Elliptic geometry and spherical geometry Is elliptic geometry equivalent to spherical geometry defined in ? Why or why not?  "
},
{
  "id": "hyperbolicparalleldispexer",
  "level": "2",
  "url": "geometry_extra_exer_section.html#hyperbolicparalleldispexer",
  "type": "Exercise",
  "number": "3.6.3",
  "title": "Parallel displacements in hyperbolic geometry.",
  "body": "Parallel displacements in hyperbolic geometry Let be an element of the hyperbolic group , with a single fixed point and normal form Show that must be a pure imaginary number, that is, there must be a real number such that .  "
},
{
  "id": "elliptictransfareellipticnormal",
  "level": "2",
  "url": "geometry_extra_exer_section.html#elliptictransfareellipticnormal",
  "type": "Exercise",
  "number": "3.6.4",
  "title": "",
  "body": "Prove that all elements of the elliptic group are elliptic in the normal form sense, i.e., we have in the normal form expression Suggestion: First find the fixed points , then put in the normal form equation and solve for .  "
},
{
  "id": "altellipticderivexer",
  "level": "2",
  "url": "geometry_extra_exer_section.html#altellipticderivexer",
  "type": "Exercise",
  "number": "3.6.5",
  "title": "Alternative derivation of the formula for elliptic group elements.",
  "body": "Alternative derivation of the formula for elliptic group elements  To obtain an explicit formula for elements of the elliptic group, we begin with a necessary condition. Let be the rotation of that lifts via stereographic projection. If are a pair of endpoints of a diameter of , then must also be a pair of endpoints of a diameter. establishes the condition that two complex numbers are stereographic projections of endpoints of a diameter if and only if . Thus we have the following necessary condition for . Now suppose that with . Solving the equation leads to and . Thus we conclude that has the following form. Carry out the computation to derive . Explain why there is no loss of generality by assuming .  "
},
{
  "id": "rotreconcileexer",
  "level": "2",
  "url": "geometry_extra_exer_section.html#rotreconcileexer",
  "type": "Exercise",
  "number": "3.6.6",
  "title": "Identifications of <span class=\"process-math\">\\(U(\\Quat)\\)<\/span> and <span class=\"process-math\">\\(\\S\\)<\/span> with <span class=\"process-math\">\\(\\Rot(S^2)\\)<\/span>.",
  "body": "Identifications of and with  The discussion of elliptic geometry ( ) establishes two ways to construct rotations from matrices. The purpose of this exercise is to reconcile these identifications. Given with , let us define the following objects, all parameterized by .  The above objects are organized along two sequences of mappings. The rotation is at the end of the quaternion path  and the rotation is at the end of the Möbius path  This problem is about comparing the rotations and (see ) and reconciling the difference. The angles of rotation are the same, but the axes are different, but only by a reordering of coordinates and a minus sign.   Axis and angle of rotation for quaternion and Möbius rotation constructions      axis of rotation   angle of rotation                   The exercises outlined below verify the values for in .  Use to justify the values for and for in .  Solve to show that one of the fixed points of is   Show that .  Show that where is given by . Here's one way to do this: evaluate both sides of on the three points . Explain why this is sufficient! Use quaternion multiplication to evaluate . For example, under the natural identification .  Here is one way to reconcile the quaternion path with the Möbius path . Let (the matrix is sometimes called the Hadamard matrix) and let denote the map . Show that the diagram in commutes. Hint: Notice that and that , and that .    The map is given by . The column of maps on the left is the Möbius path , and the column of maps on the right is the quaternion path .     "
},
{
  "id": "right_triangle_fig",
  "level": "2",
  "url": "geometry_extra_exer_section.html#right_triangle_fig",
  "type": "Figure",
  "number": "3.6.3",
  "title": "",
  "body": " Right triangle    "
},
{
  "id": "pythagthmsexer",
  "level": "2",
  "url": "geometry_extra_exer_section.html#pythagthmsexer",
  "type": "Exercise",
  "number": "3.6.7",
  "title": "Pythagorean Theorems.",
  "body": "Pythagorean Theorems Let be a right triangle with right angle with side lengths , , and so that the length of the hypotenuse is . See .  Prove the following identities.   The Hyperbolic Pythagorean Theorem Pythagorean Theorem Hyperbolic Pythagorean Theorem . Show that if is a hyperbolic triangle.  The Elliptic Pythagorean Theorem Pythagorean Theorem Elliptic Pythagorean Theorem . Show that if is an elliptic triangle.    Suggestion: Use a transformation to place at in or , with real and pure imaginary. Use the formula with for hyperbolic distance. Use the formula , with for elliptic distance. The identities from part (a) will be useful.  "
},
{
  "id": "backmatter-1",
  "level": "1",
  "url": "backmatter-1.html",
  "type": "References",
  "number": "",
  "title": "Further topics",
  "body": " Further topics  Here are some topics and sources for independent study projects that are accessible at the level of this textbook.  The classification of the Platonic solids using group theory  More group theory with connections to geometry  More group theory and an introduction to rings and fields  More geometry using a Kleinian approach   An elementary introduction to the Hopf fibration  Algebra and geometry in quantum mechanics     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": "References  Lars V. Ahlfors. Complex Analysis: An Introduction to the Theory of Analytic Functions of One Complex Variable . McGraw-Hill, 1953.  M.A. Armstrong. Groups and Symmetry . Springer, 1988.  Joseph A. Gallian. Contemporary abstract algebra . Cengage Learning, 9th edition, 2017.  Michael Henle. Modern Geometries: Non-Euclidean, Projective, and Discrete . Prentice Hall, 2 edition, 2001.  David W. Lyons. Complex Numbers. Not Just Calculus . mathvista.org , 2024.  David W. Lyons. An elementary introduction to the Hopf fibration. Mathematics Magazine , 76(2):87--98, 2003.  Michael A. Nielsen and Isaac L. Chuang. Quantum Computation and Quantum Information . Cambridge University Press, 2000.  Hermann Weyl. Symmetry . Princeton University Press, Princeton, New Jersey, 1952.  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "References",
  "number": "",
  "title": "Notation",
  "body": " Notation   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
