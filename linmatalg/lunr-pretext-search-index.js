var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "David W. Lyons Department of Mathematical Sciences  Lebanon Valley College  Annville, PA, USA  lyons@lvc.edu copyright 2021 David W. Lyons  May 2021 Edition, revised:       Preface  The central concept of differential calculus is that of the local linearization . Most introductory multivariable calculus texts define and utilize vectors and vector operations, but stop short of defining linear transformations . The purpose of these notes is to fill that gap. By developing the basic properties and vocabulary of linear transformations and the corresponding matrix algebra, the aim is to provide a natural, unifying, and useful language for understanding the definition of the derivative and facts including the chain rule.  The material in these notes is not meant to be a short version of a full semester linear algebra course. It is designed to provide enough basic linear algebra and matrix algebra to work effectively with the material in a standard introductory multivariable calculus course.  A secondary purpose of these notes is to address the common practice in undergraduate textbooks (even in courses on linear algebra!) of introducing matrix multiplication as a \"voodoo\" practice, that is, a complicated operation on boxes of numbers given without motivation. Here, we develop matrix multiplication as the natural consequence of the fact that matrices represent linear transformations: the product of matrices that represent two linear transformations is the matrix that represents their composition. For this development alone, the first three sections of these notes could be of use in a linear algebra course.  Here is an example of a possible schedule for integrating these notes into a multivariate calculus course in a total of 3 to 5 50-minute class meetings.  Sections 1,2,3: Add two or three days to the end of the multivariate calculus text's chapter on vectors in and (material on dot products and cross products, etc)  Section 4: Add one or two days at the end of the multivariate calculus text's chapter on partial derivatives (material on tangent planes, chain rule, etc)        "
},
{
  "id": "rnvects_section",
  "level": "1",
  "url": "rnvects_section.html",
  "type": "Section",
  "number": "1",
  "title": "The vector space <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " The vector space    Vectors and vector operations  A list   -tuple of real numbers  of real numbers, separated by commas and delimited by parentheses, denotes an -tuple of real numbers -tuple . The set of all -tuples of real numbers, denoted -dimensional real space , is called -dimensional (real) space -dimensional real space .   The operation of vector addition  vector addition  vector operations  vector addition of two -tuples is defined by and scalar multiplication  scalar multiplication  vector operations  scalar multiplication of an -tuple by a real number (or scalar ) is defined by With the operations of addition and scalar multiplication, called vector operations vector operations , the set is a vector space vector space  and -tuples are vectors vector  .  Vectors are often denoted by lowercase letters in bold Roman font (better for typing), and sometimes italic font decorated with arrows (better for handwriting). Here are examples. In many multivariable calculus and introductory physics texts, vectors are denoted using angle brackets, rather than parentheses, for delimiters. That is, these texts write instead of . In these notes, we do not observe this convention.  The vector with all entries equal to 0 is called the zero vector zero vector and is denoted  zero vector  or   zero vector  .  A sum of the form where are scalars and are vectors is called a linear combination linear combination  of the vectors .    Standard basis vectors  The vector with a single 1 in the th position and zeroes in all other positions is called the th standard basis vector standard basis vector  th standard basis vector in . In , the standard basis vectors and are also called and , respectively. In , the standard basis vectors , and are also called , , and , respectively. Given a vector , we have the following representation of as a sum of scalar multiples of the standard basis vectors (note that the summation sign indicates vector addition). Equation says that every vector is a linear combination of standard basis vectors.    Inner product  The inner product inner product  or dot product dot product  of two vectors and is defined to be the real number In terms of inner product, the th coordinate of the vector is given by and becomes     Write each of the following vectors in the form and . For , also write using notation. Example: Given , write .                     Verify equation .   Verify equation .   Show that where  Kronecker delta  , called the Kronecker delta Kronecker delta  , is given by    The length length of a vector  or norm norm of a vector  of vector , denoted  norm of a vector  , is defined by A vector is said be be normalized normalized vector  or have norm 1 norm 1 vector  if .  Show that, for any vector and any real , we have   Show that, for any nonzero vector , the vector has norm 1.      "
},
{
  "id": "rnvects_section-2-2",
  "level": "2",
  "url": "rnvects_section.html#rnvects_section-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-tuple of real numbers -dimensional (real) space "
},
{
  "id": "rnvects_section-2-3",
  "level": "2",
  "url": "rnvects_section.html#rnvects_section-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector addition scalar multiplication scalar vector operations vector space vectors "
},
{
  "id": "rnvects_section-2-4",
  "level": "2",
  "url": "rnvects_section.html#rnvects_section-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero vector "
},
{
  "id": "rnvects_section-2-5",
  "level": "2",
  "url": "rnvects_section.html#rnvects_section-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "rnvects_section-3-2",
  "level": "2",
  "url": "rnvects_section.html#rnvects_section-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "th standard basis vector "
},
{
  "id": "rnvects_section-4-2",
  "level": "2",
  "url": "rnvects_section.html#rnvects_section-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inner product dot product "
},
{
  "id": "vectnotationexer",
  "level": "2",
  "url": "rnvects_section.html#vectnotationexer",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "Write each of the following vectors in the form and . For , also write using notation. Example: Given , write .                    "
},
{
  "id": "sumofcompsexer",
  "level": "2",
  "url": "rnvects_section.html#sumofcompsexer",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "Verify equation . "
},
{
  "id": "ithentryexer",
  "level": "2",
  "url": "rnvects_section.html#ithentryexer",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "Verify equation . "
},
{
  "id": "eidotejexer",
  "level": "2",
  "url": "rnvects_section.html#eidotejexer",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "Show that where  Kronecker delta  , called the Kronecker delta Kronecker delta  , is given by  "
},
{
  "id": "vectnormexer",
  "level": "2",
  "url": "rnvects_section.html#vectnormexer",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "The length length of a vector  or norm norm of a vector  of vector , denoted  norm of a vector  , is defined by A vector is said be be normalized normalized vector  or have norm 1 norm 1 vector  if .  Show that, for any vector and any real , we have   Show that, for any nonzero vector , the vector has norm 1.   "
},
{
  "id": "lin_maps_section",
  "level": "1",
  "url": "lin_maps_section.html",
  "type": "Section",
  "number": "2",
  "title": "Linear transformations",
  "body": " Linear transformations   Definition of a linear transformation  A function is called a linear transformation linear transformation  (or a linear mapping , or simply a linear map ) if  , and    for all vectors in and real numbers . Properties (i) and (ii) are called linearity properties linearity properties  . We say that  preserves or respects vector operations of addition and scaling. Instead of , it is common practice to omit the parentheses and write when is a linear transformation. For the case when , a linear transformation is also called a linear operator linear operator  on .    Why linear maps are easy to compute  Given a vector and a linear map , we have A consequence of equation is that a linear map is determined by its values on the standard basis vectors . In words, the value of on the vector is a linear combination of the vectors , with the coefficient for the vector . Given the vectors , computing the value of a linear map requires only scalar multiplication and vector addition.    Operations on linear transformations  Let , let , and let be a real number. Linear transformations , , and are defined as follows. Note that is the same thing as , the ordinary composition of functions. It is conventional to omit the composition symbol in the context of linear transformations.    Let be a linear map such that and . Find .     Let be a linear map. Find if , , and .   Show that the two linearity properties in the definition of linear transformation given in are equivalent to the single property for all vectors and scalars .   Justify each of the equalities , , and .   The dot product has the following properties that look like the properties in the definition of linear map. for all in and scalars . Show that these properties hold.   Prove that the composition of two linear maps is a linear map.    "
},
{
  "id": "linmapdefsubsect-2",
  "level": "2",
  "url": "lin_maps_section.html#linmapdefsubsect-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear transformation linear mapping linear map linearity preserves respects linear operator "
},
{
  "id": "lin_maps_section-5-1",
  "level": "2",
  "url": "lin_maps_section.html#lin_maps_section-5-1",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "Let be a linear map such that and . Find .    "
},
{
  "id": "lin_maps_section-5-2",
  "level": "2",
  "url": "lin_maps_section.html#lin_maps_section-5-2",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "Let be a linear map. Find if , , and .  "
},
{
  "id": "linpropexer",
  "level": "2",
  "url": "lin_maps_section.html#linpropexer",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": "Show that the two linearity properties in the definition of linear transformation given in are equivalent to the single property for all vectors and scalars . "
},
{
  "id": "linmapsumstdexer",
  "level": "2",
  "url": "lin_maps_section.html#linmapsumstdexer",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "Justify each of the equalities , , and . "
},
{
  "id": "dotprodpropexer",
  "level": "2",
  "url": "lin_maps_section.html#dotprodpropexer",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "",
  "body": "The dot product has the following properties that look like the properties in the definition of linear map. for all in and scalars . Show that these properties hold. "
},
{
  "id": "lincompislinexer",
  "level": "2",
  "url": "lin_maps_section.html#lincompislinexer",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "",
  "body": "Prove that the composition of two linear maps is a linear map. "
},
{
  "id": "matrices_section",
  "level": "1",
  "url": "matrices_section.html",
  "type": "Section",
  "number": "3",
  "title": "Matrix algebra",
  "body": " Matrix algebra   Matrix notation  A real matrix matrix  is a rectangular array of real numbers, called the entries matrix matrix entries  or elements matrix matrix elements  in the matrix. Matrix entries are indexed by a pair of integers that indicate the row and column, respectively, of the entry. Rows are counted from top to bottom and columns are counted from left to right. A matrix with rows and columns is called an matrix (pronounced \" by matrix\"). We write matrix with entries   to denote a matrix with entries (here, we adopt the common practice of omitting the comma between the subscripted indices ).   A matrix with only 1 row is called a row matrix and a matrix with only 1 column is a column matrix . Entries of row and column matrices (the plural of \"matrix\" is \"matrices\") are usually given with just one index.   In the matrix , it is sometimes useful to write where is the th column of the matrix .    Matrices and vectors  In matrix algebra, vectors are identified with column matrices. In some texts, -tuples denoted by comma-separated lists are considered to be different types of objects from -tuples written as column matrices. In these notes, we consider the comma-separated list and the column matrix to simply be two notations for the same thing.      Matrices and linear transformations  Next, we establish a one-to-one correspondence between linear transformations and matrices.  Given a linear transformation , let denote the matrix whose columns are the vectors . Conversely, given an matrix , let denote the linear transformation given by It is clear that and therefore, that . We conclude that the correspondence is a one-to-one correspondence between the set of linear transformations and the set of matrices.     Matrix algebra  Using the one-to-one correspondence , we can define the following matrix operations. Let be an matrix, and let be an column matrix. By , there is a linear transformation such that . We define to be equal to . Given a scalar , we define to be equal to . If is another matrix with , we define to be equal to . Finally, if is an matrix such that , we define to be equal to .  Here is a summary of the operations of matrix algebra.   Here are formulas for matrix operations in terms of matrix entries. In most texts, the above formulas are given as definitions . In these notes, these formulas are consequences of the definitions , , and . We make this choice to emphasize that matrix algebra operations are natural because they come from the corresponding natural operations on linear maps. There is a fourth basic operation, called transposition matrix matrix transposition  , whose corresponding operation on linear maps is less easy to describe. We define the transpose matrix transpose of a matrix  of matrix , denoted transpose of the matrix   , by Here is how the inner product can be written in terms matrix algebra using transposition.     Perform the matrix multiplications below.                     Let be a linear map with , , and .  Write the matrix for L .  Evaluate .  Evaluate .                Let be a linear map with the following matrix.   Evaluate .  Evaluate .               Equation is a fundamental formula for matrix calculations. This exercise outlines a proof. Let be linear transformations Let be the element in the th row and th column of , and let denote the th row and th column of , respectively. Justify each step in the derivation below.  For in , we have   Now let so that (say why!) We have   From this we conclude (say how!) that the entry in is      Let and be linear maps such that , and .  Write the matrices for and .  Find the matrix for .  Find .      ,              "
},
{
  "id": "matrices_section-2-2",
  "level": "2",
  "url": "matrices_section.html#matrices_section-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real matrix entries elements matrix "
},
{
  "id": "matrices_section-2-3",
  "level": "2",
  "url": "matrices_section.html#matrices_section-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row matrix column matrix "
},
{
  "id": "matrices_section-5-4",
  "level": "2",
  "url": "matrices_section.html#matrices_section-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transposition transpose "
},
{
  "id": "matrices_section-6-1",
  "level": "2",
  "url": "matrices_section.html#matrices_section-6-1",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "Perform the matrix multiplications below.                    "
},
{
  "id": "matrices_section-6-2",
  "level": "2",
  "url": "matrices_section.html#matrices_section-6-2",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": "Let be a linear map with , , and .  Write the matrix for L .  Evaluate .  Evaluate .               "
},
{
  "id": "matrices_section-6-3",
  "level": "2",
  "url": "matrices_section.html#matrices_section-6-3",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": "Let be a linear map with the following matrix.   Evaluate .  Evaluate .              "
},
{
  "id": "matmultexer",
  "level": "2",
  "url": "matrices_section.html#matmultexer",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": "Equation is a fundamental formula for matrix calculations. This exercise outlines a proof. Let be linear transformations Let be the element in the th row and th column of , and let denote the th row and th column of , respectively. Justify each step in the derivation below.  For in , we have   Now let so that (say why!) We have   From this we conclude (say how!) that the entry in is    "
},
{
  "id": "matrices_section-6-5",
  "level": "2",
  "url": "matrices_section.html#matrices_section-6-5",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": "Let and be linear maps such that , and .  Write the matrices for and .  Find the matrix for .  Find .      ,            "
},
{
  "id": "linalgincalc3_section",
  "level": "1",
  "url": "linalgincalc3_section.html",
  "type": "Section",
  "number": "4",
  "title": "Linear algebra in multivariable calculus",
  "body": " Linear algebra in multivariable calculus   Differentiability   A function is differentiable differentiable at a point  at the point if there exists a linear transformation such that If exists, it is called the derivative of derivative at a point  at  denoted the derivative of at   .  To understand the definition of the derivative, start with the case . The derivative of at is a number such that for near . The meaning of \"approximately equals for near \" is made precise by using a limit. To generalize to higher dimensions, interpret as the value of a linear transformation that sends to . The derivative of at is a linear transformation such that for near . Putting , this reads for near . Dividing both sides by and taking a limit, we get an expression for . where . From this it follows that , if it exists, is represented by the matrix .     The Chain Rule   Consider the composition of functions and suppose is differentiable at and is differentiable at . The chain rule chain rule  says that is differentiable at , and that the derivative of the composition is the composition of the derivatives. This explains the \"tree diagram rule\" given in most multivariate calculus texts. The partial derivative is just the entry of the product of the derivative matrices for and .     Verify the definition of differentiable function given in is equivalent to the usual definition for from Calculus 1.   Explain equation . Why does the limit on the left equal the vector on the right?    Explain equation . How does this equation follow from the previous?   Explain equation . How is it the same as the chain rule ?    "
},
{
  "id": "diffdefsubsect-2",
  "level": "2",
  "url": "linalgincalc3_section.html#diffdefsubsect-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differentiable derivative of derivative at a point  at  "
},
{
  "id": "linalgincalc3_section-3-2",
  "level": "2",
  "url": "linalgincalc3_section.html#linalgincalc3_section-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chain rule "
},
{
  "id": "nm1diffexer",
  "level": "2",
  "url": "linalgincalc3_section.html#nm1diffexer",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "Verify the definition of differentiable function given in is equivalent to the usual definition for from Calculus 1. "
},
{
  "id": "partialderivlimitexer",
  "level": "2",
  "url": "linalgincalc3_section.html#partialderivlimitexer",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "Explain equation . Why does the limit on the left equal the vector on the right?  "
},
{
  "id": "dfmatexer",
  "level": "2",
  "url": "linalgincalc3_section.html#dfmatexer",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "Explain equation . How does this equation follow from the previous? "
},
{
  "id": "chainrulereconcilexer",
  "level": "2",
  "url": "linalgincalc3_section.html#chainrulereconcilexer",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": "Explain equation . How is it the same as the chain rule ? "
},
{
  "id": "linmatalg-7-1",
  "level": "1",
  "url": "linmatalg-7-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "copyright 2021 David W. Lyons  May 2021 Edition  This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit http:\/\/creativecommons.org\/licenses\/by-nc-sa\/4.0\/ .  You are free to:  Share — copy and redistribute the material in any medium or format  Adapt — remix, transform, and build upon the material  Under the following terms:  Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.  NonCommercial — You may not use the material for commercial purposes.  ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.    "
},
{
  "id": "linmatalg-7-2",
  "level": "1",
  "url": "linmatalg-7-2.html",
  "type": "Author Biography",
  "number": "",
  "title": "About the author",
  "body": "About the author  David W. Lyons is a professor of mathematics at Lebanon Valley College in Annville, Pennsylvania, USA, where he has taught and conducted research since 2000. Lyons works in mathematical physics, leading a student-faculty research program in quantum information science since 2002. For more information, visit his academic website at the URL below.  quantum.lvc.edu\/lyons  "
},
{
  "id": "linmatalg-7-3",
  "level": "1",
  "url": "linmatalg-7-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "linmatalg-7-4",
  "level": "1",
  "url": "linmatalg-7-4.html",
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
