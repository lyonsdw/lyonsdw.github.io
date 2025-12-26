var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  These notes provide supplemental material for an introduction to proof writing course for mathematical sciences students.  "
},
{
  "id": "prelim_section-3",
  "level": "1",
  "url": "prelim_section-3.html",
  "type": "Section",
  "number": "0.1",
  "title": "Basics of Sets and Functions",
  "body": "Basics of Sets and Functions  Read and solve the problems in Sections 1.1, 1.2, 1.3 of .  "
},
{
  "id": "logic_section-3",
  "level": "1",
  "url": "logic_section-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "Boolean algebra",
  "body": " Boolean algebra  The truth tables for compound statements that are presented in most textbooks are just input-output tables for functions, where every entry is a truth value. In these tables, the actual statements play no role; only their truth values matter. Boolean algebra provides a language for working directly with such functions in a way that bypasses the need for cumbersome input-output tables.  The set , together with the operations of addition and multiplication mod 2, is called the Boolean domain . Multiplication mod 2 is the same as ordinary multiplication of integers. Addition mod 2 is defined by , , and .    Show that the following identities hold for .  (the commutative law of addition)  (the commutative law of multiplication)  (the associative law of addition)  (the associative law of multiplication)  (additive identity)  (multiplicative identity)  (the distributive law)           Let denote the set of all statements, and let given by In these notes we will refer to as the truth value function.   Let .  Show that .  Show that .  Show that .      The exercise above justifies the following associations for and .    Let denote the logical connective whose corresponding Boolean function is , that is, we have . Use a truth table to verify that a reasonable verbalization of is or , but not both . The connective is called exclusive or .     Find the missing Boolean functions for the logical connectives in the table below.      Let be statements, and let be , respectively.  Find the Boolean expression that corresponds to the logical expression  Find the truth table for the logical expression whose corresponding Boolean expression is .      Use Boolean expressions instead of truth tables for all of the exercises in Ch 1 of that suggest that you use truth tables.   "
},
{
  "id": "logic_section-3-3",
  "level": "2",
  "url": "logic_section-3.html#logic_section-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Boolean domain "
},
{
  "id": "logic_section-3-4",
  "level": "2",
  "url": "logic_section-3.html#logic_section-3-4",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "",
  "body": "  Show that the following identities hold for .  (the commutative law of addition)  (the commutative law of multiplication)  (the associative law of addition)  (the associative law of multiplication)  (additive identity)  (multiplicative identity)  (the distributive law)          "
},
{
  "id": "logic_section-3-5",
  "level": "2",
  "url": "logic_section-3.html#logic_section-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truth value "
},
{
  "id": "logic_section-3-6",
  "level": "2",
  "url": "logic_section-3.html#logic_section-3-6",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": " Let .  Show that .  Show that .  Show that .     "
},
{
  "id": "logic_section-3-8",
  "level": "2",
  "url": "logic_section-3.html#logic_section-3-8",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": " Let denote the logical connective whose corresponding Boolean function is , that is, we have . Use a truth table to verify that a reasonable verbalization of is or , but not both . The connective is called exclusive or .   "
},
{
  "id": "booleanforimplicationexer",
  "level": "2",
  "url": "logic_section-3.html#booleanforimplicationexer",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "",
  "body": " Find the missing Boolean functions for the logical connectives in the table below.    "
},
{
  "id": "convertlogicbooleanexer",
  "level": "2",
  "url": "logic_section-3.html#convertlogicbooleanexer",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "",
  "body": " Let be statements, and let be , respectively.  Find the Boolean expression that corresponds to the logical expression  Find the truth table for the logical expression whose corresponding Boolean expression is .    "
},
{
  "id": "logic_section-3-11",
  "level": "2",
  "url": "logic_section-3.html#logic_section-3-11",
  "type": "Checkpoint",
  "number": "1.1.6",
  "title": "",
  "body": " Use Boolean expressions instead of truth tables for all of the exercises in Ch 1 of that suggest that you use truth tables.  "
},
{
  "id": "logic_section-4",
  "level": "1",
  "url": "logic_section-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Equivalence of Logical and Boolean Expressions",
  "body": " Equivalence of Logical and Boolean Expressions  suggests that there is some kind of equivalence between logical expressions and Boolean expressions. This turns out to be true. Here are some facts.  All Boolean functions are polynomial  Let be Boolean variables, and let be a function. Then may be written as a polynomial for some constants .   Comment on terminology. A Boolean expression in variables is a polynomial in those variables, with coefficients in . Polynomials are the expressions that can be made using only the variables , the constants , and the operations of addition and multiplication. A consequence of is that Boolean expressions account for all possible Boolean functions .   Identify all of the details for the Boolean functions in both parts of .   All Boolean expressions are logical  Let be a function. There exists a truth table in whose columns are statements for a logical expression made using and the logical connectives whose corresponding Boolean expression is , where for .   Make three random strings 8 letter long using the letters . Make a table whose columns are labeled , and with 8 rows, filled in with the 8 3-letter logical possibilities for columns , and put one of your random 8-letter strings in the column for . Find a logical expression made using and the connectives so that your table is the truth table for that expression. Find the corresponding Boolean polynomial expression. Repeat for your remaining 8-letter strings.   The connectives are universal  Any truth table made from any number of logical variables is equivalent to the truth table for a logical expression that used only the logical connectives .    "
},
{
  "id": "booleanfunsarepolys",
  "level": "2",
  "url": "logic_section-4.html#booleanfunsarepolys",
  "type": "Proposition",
  "number": "1.2.1",
  "title": "All Boolean functions are polynomial.",
  "body": "All Boolean functions are polynomial  Let be Boolean variables, and let be a function. Then may be written as a polynomial for some constants .  "
},
{
  "id": "logic_section-4-4",
  "level": "2",
  "url": "logic_section-4.html#logic_section-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Boolean expression "
},
{
  "id": "logic_section-4-5",
  "level": "2",
  "url": "logic_section-4.html#logic_section-4-5",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "",
  "body": " Identify all of the details for the Boolean functions in both parts of .  "
},
{
  "id": "logic_section-4-6",
  "level": "2",
  "url": "logic_section-4.html#logic_section-4-6",
  "type": "Proposition",
  "number": "1.2.3",
  "title": "All Boolean expressions are logical.",
  "body": "All Boolean expressions are logical  Let be a function. There exists a truth table in whose columns are statements for a logical expression made using and the logical connectives whose corresponding Boolean expression is , where for .  "
},
{
  "id": "logic_section-4-7",
  "level": "2",
  "url": "logic_section-4.html#logic_section-4-7",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "",
  "body": "Make three random strings 8 letter long using the letters . Make a table whose columns are labeled , and with 8 rows, filled in with the 8 3-letter logical possibilities for columns , and put one of your random 8-letter strings in the column for . Find a logical expression made using and the connectives so that your table is the truth table for that expression. Find the corresponding Boolean polynomial expression. Repeat for your remaining 8-letter strings.  "
},
{
  "id": "logic_section-4-8",
  "level": "2",
  "url": "logic_section-4.html#logic_section-4-8",
  "type": "Corollary",
  "number": "1.2.5",
  "title": "The connectives <span class=\"process-math\">\\(\\sim,\\wedge,\\vee\\)<\/span> are universal.",
  "body": "The connectives are universal  Any truth table made from any number of logical variables is equivalent to the truth table for a logical expression that used only the logical connectives .  "
},
{
  "id": "logic_section-5",
  "level": "1",
  "url": "logic_section-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "Predicates and quantifiers",
  "body": "Predicates and quantifiers  A predicate is a function , where is a set and is the set of statements.  We use the symbols to denote for all , there exists , respectively. It is okay to use these shorthand symbols for informal chalkboard discussion and for scratchwork. In narrative writing, always use words instead. For example, in an informal discussion, one might write but in formal writing, one might write for all in the domain , the statement holds.    "
},
{
  "id": "sets_section-3",
  "level": "1",
  "url": "sets_section-3.html",
  "type": "Section",
  "number": "2.1",
  "title": "Characteristic Functions",
  "body": "Characteristic Functions  Read and solve the problems in Exercises 1 and 2 in Section 1.8.3 of .   Prove all of the set identities in the exercises in Chapter 2 of using characteristic functions.   "
},
{
  "id": "sets_section-3-3",
  "level": "2",
  "url": "sets_section-3.html#sets_section-3-3",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "",
  "body": " Prove all of the set identities in the exercises in Chapter 2 of using characteristic functions.  "
},
{
  "id": "induction_section-3",
  "level": "1",
  "url": "induction_section-3.html",
  "type": "Section",
  "number": "3.1",
  "title": "Proof using mathematical induction",
  "body": "Proof using mathematical induction  Read Chapter 10 of and work the odd-numbered exercises and the end of Chapter 10.  "
},
{
  "id": "relations_section-2",
  "level": "1",
  "url": "relations_section-2.html",
  "type": "Section",
  "number": "4.1",
  "title": "Basic objects",
  "body": "Basic objects  The following definitions clarify and expand the definitions given in .    Let be sets. A relation from to is a subset of the Cartesian product . A relation from a set to itself is called a relation on the set . Given a relation from to , the inverse relation to , denoted , is the relation from to given by    Given a relation on a set , a directed graph is a figure that illustrates . Elements of are depicted as dots, and in is depicted by a segment of a line or an arc that starts at , ends at , and has an arrow pointing from to .    A (simple) graph is a pair , where is a set and is a set of subsets of , where every element of has two elements. An element of is called a vertex and an element of is called an edge . The set is called the set of vertices of the graph , and the set is called the set of edges of .  One can also define graphs that allow loops, that is, edges that connect a vertex to itself. Further generalizations of graphs allow multiple edges that connect the same pair of vertices. In this course, the term graph will always refer to a simple graph, as defined above. The definition of graph given in uses the word pair in the definition of an edge. Unfortunately, this introduces ambiguity as to whether loops are allowed as edges. In mathematics, the word pair usually denotes an ordered list . By default, it is allowable that the objects and may be equal. We avoid this ambiguity by not using the word pair in our definition of graph.   "
},
{
  "id": "relations_section-2-3",
  "level": "2",
  "url": "relations_section-2.html#relations_section-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relation from to relation on the set inverse relation "
},
{
  "id": "relations_section-2-4",
  "level": "2",
  "url": "relations_section-2.html#relations_section-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "directed graph "
},
{
  "id": "relations_section-2-5",
  "level": "2",
  "url": "relations_section-2.html#relations_section-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(simple) graph vertex edge set of vertices set of edges "
},
{
  "id": "functions_section",
  "level": "1",
  "url": "functions_section.html",
  "type": "Chapter",
  "number": "5",
  "title": "Functions",
  "body": " Functions   Further material may be added here.     "
},
{
  "id": "elem_num_thy_section",
  "level": "1",
  "url": "elem_num_thy_section.html",
  "type": "Chapter",
  "number": "6",
  "title": "Elementary Number Theory",
  "body": " Elementary Number Theory   Further material may be added here.     "
},
{
  "id": "cardinality_section-2",
  "level": "1",
  "url": "cardinality_section-2.html",
  "type": "Section",
  "number": "7.1",
  "title": "Shroeder-Bernstein Theorem",
  "body": "Shroeder-Bernstein Theorem  (Schroeder-Bernstein)  If and are one-to-one maps, then .   Proof outline.   For each , form a sequence to the right and to the left of .   Observe that theses sequences may or may not terminate on the left.  Observe that each of these sequences is one of two types: (i) terminates on the left with an element (that is, is not in the image of ); or (ii) does not have the property that defines type (i).  Define by if lies in a sequence of type (i), and if lies in a sequence of type (ii). Now show is well-defined and is a bijection.     Complete the proof of the Schroeder-Berstein Theorem following the outline given above.   "
},
{
  "id": "cardinality_section-2-2",
  "level": "2",
  "url": "cardinality_section-2.html#cardinality_section-2-2",
  "type": "Theorem",
  "number": "7.1.1",
  "title": "(Schroeder-Bernstein).",
  "body": "(Schroeder-Bernstein)  If and are one-to-one maps, then .  "
},
{
  "id": "cardinality_section-2-4",
  "level": "2",
  "url": "cardinality_section-2.html#cardinality_section-2-4",
  "type": "Checkpoint",
  "number": "7.1.2",
  "title": "",
  "body": " Complete the proof of the Schroeder-Berstein Theorem following the outline given above.  "
},
{
  "id": "backmatter-1",
  "level": "1",
  "url": "backmatter-1.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": "References  Carol Schumacher Chapter Zero, 2nd edition . Addison-Wesley, 2001.  David W. Lyons. Not Just Calculus . Mathvista.org   Richard Hammack. Book of Proof . Online .  "
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
