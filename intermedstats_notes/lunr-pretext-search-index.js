var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "David W. Lyons Department of Mathematical Sciences  Lebanon Valley College  Annville, PA, USA  lyons@lvc.edu copyright 2025 David W. Lyons  January 2026 Edition, revised:       Preface  These notes provide core material for an introductory statistics course for second-year mathematical sciences majors. This course assumes that students have had at least one semester of calculus and are familiar with vocabulary, notation and facts about sets and functions. Experience with infinite series and convergence is desirable, but not strictly required. While the course is truly introductory, in the sense that no prior course in probability or statistics is assumed, the title uses the term intermediate to indicate that the level of the book is between a nontechnical general-education text such as Freedman and an upper-level mathematical statistics text such as Rice .   "
},
{
  "id": "sets_counting_section",
  "level": "1",
  "url": "sets_counting_section.html",
  "type": "Section",
  "number": "1",
  "title": "Sets and Counting",
  "body": " Sets and Counting   Counting refers to a set of techniques for determining relationships between the sizes of sets. Formally, we say that sets have the same size , or cardinality , if there exists a one-to-one correspondence . We write to denote the number of elements in a finite set .    Addition Principle(s)  Recall that two sets are disjoint if their intersection is empty. The most basic counting principle is the following.   Addition Principle  Let be disjoint finite sets. We have   A collection of sets is called pairwise disjoint if every pair of distinct sets in the collection is disjoint. Recall that a partition of a set is a collection of pairwise disjoint nonempty subsets of whose union is all of . Partitions are a natural context for the following generalization of the Addition Principle.   Addition Principle for Partitions  Let be a finite set, and let be a partition of . We have     Find all of the possible partitions of the set .    Multiplication Principle(s)  Multiplication principles are based on the following bit of common sense. Suppose your job is to count the chairs in a large dining room. Suppose you see right away that the chairs are set around tables, and each table has chairs. Do you now count all the chairs individually? Of course not. You count the tables: let's say there are of them. Now you know the number of chairs is , without having counted the chairs one by one. Here is the mathematical version of this idea.   Multiplication Principle for Partitions  Suppose a finite set is partitioned into subsets, each of which has the same size . Then      Use the addition principle for partitions to prove the multiplication rule for partitions.  provides a way to count the elements in a set using a sequence of decisions , or choices . If a set is partitioned into subsets of equal size, we can choose an element of as follows.  First, choose one of the partition subsets.  Second, choose an element from that subset.  Since there are ways to make the first choice, and then, having made the first choice, there are ways to make the second choice, then we conclude that . This thinking generalizes to longer choice sequences, as follows.   Multiplication Principle for a Sequence of Decisions   Suppose that every element of a finite set is uniquely specified by a sequence of choices, such that there are ways to make the first choice; then, having made the first choice, there are ways to make the second choice (no matter how the first choice was made); and so on; finally, having made the -st choice, there are ways to make the -th choice (no matter how the previous choices were made). Then we have      Use the multiplication principle to show that for finite sets .   As an application of the Multiplication Principle, we count the number of orderings of a finite set. Recall that a bijection is a function that is one-to-one and onto. An ordering or permutation of a finite set of size is given by a bijection . We say the first element of is , the second element is , and so on. We can specify an ordering of by making the following sequence of choices.  First, choose a value for . There are ways to make this choice.  Second, choose a value for . There are ways to make this choice from the elements in that were not chosen in step 1.  And so on, for , for which there are ways to make each of these choices, respectively.  From this sequence of choices, we conclude that the number of orderings of is . We record this result as a proposition.   Permutations of a finite set  Let be a finite set. The number of permutations (or orderings) of the elements of is .      Sequences and Permutations  Let be a set. A function is called a sequence in of length . A sequence is denoted by an ordered list of elements in , where for . The set of all possible sequences in of length is denoted , and is also called the -fold Cartesian product of with itself. Elements of are also called ordered -tuples . It is convenient to have a name for the subset of sequences that are one-to-one, which is the same as the set of -tuples that have no repeated values, that is, for which for . These sequences are called permutations of elements of . We write to denote the set of sequences of length in that are one-to-one (the letter is for permutations ).   Let .  Write out the elements of the set .  Write out the elements of the set .  Write out the elements of the set .  Write out the elements of the set .  Write out the elements of the set .     The following sequence counting formulas come from applications of the Multiplication Principle.   Counting sequences   Let be a finite set. We have the following.     The standard notation for the number of permutations of elements from a set of size is . The number is also called the number of permutations of items chosen at a time. In this notation, the formulas in and Equation , respectively, have the following forms.   Use the multiplication principle to justify and .      Subsets and Combinations  Let be a finite set, and let be an integer in the range . We will write to denote the set of all subsets of of size . The sets and are related: An element of is specified by the following sequence of decisions.  First, choose an element of .  Second, choose an ordering of .  The sequence-of-choices version of the multiplication principle applies, and we have Putting this together with results in the previous subsections, we have the following. The number of subsets of size in a set of size is denoted , and is also called the number of combinations of items chosen at a time . The usual mathematical notation for the is . Using this notation, and , respectively, have the following forms.    The binomial formula is the algebraic identity Use counting principles to explain why this is true.     Infinite sets and sequences  Recall that a function from the natural numbers to a set is called a sequence in the set . A set is called countably infinite if there exists a sequence in that is one-to-one and onto. An infinite set is called uncountably infinite if is not countably infinite.    Give an example of a function that is one-to-one and onto, and that is not the identity function.  Give an example of a function that is one-to-one but not onto.  Give an example of a function that is onto but not one-to-one.  Give an example of a function that is neither one-to-one nor onto, and that is not a constant function.  Let be the set of all sequences in . Suppose that is one-to-one and onto. Define an element of by . Is it possible that is in the image of ? What do you conclude about ?   Hint for the last part ( ).  Make grid-format layout to help see what is going on. In the notation in this layout, the doubly-indexed value is equal to . This means that . Now think about how looks. Is it possible that could equal for some ? What consequence does this imply about our assumption that is onto?      Sets and Counting Exercises  Work the Sets and Counting exercise set posted on Canvas.    "
},
{
  "id": "sets_counting_section-3-3",
  "level": "2",
  "url": "sets_counting_section.html#sets_counting_section-3-3",
  "type": "Proposition",
  "number": "1.1",
  "title": "Addition Principle.",
  "body": " Addition Principle  Let be disjoint finite sets. We have  "
},
{
  "id": "sets_counting_section-3-5",
  "level": "2",
  "url": "sets_counting_section.html#sets_counting_section-3-5",
  "type": "Proposition",
  "number": "1.2",
  "title": "Addition Principle for Partitions.",
  "body": " Addition Principle for Partitions  Let be a finite set, and let be a partition of . We have   "
},
{
  "id": "partitiondefexer",
  "level": "2",
  "url": "sets_counting_section.html#partitiondefexer",
  "type": "Checkpoint",
  "number": "1.3",
  "title": "",
  "body": " Find all of the possible partitions of the set .  "
},
{
  "id": "partmultprin",
  "level": "2",
  "url": "sets_counting_section.html#partmultprin",
  "type": "Proposition",
  "number": "1.4",
  "title": "Multiplication Principle for Partitions.",
  "body": " Multiplication Principle for Partitions  Suppose a finite set is partitioned into subsets, each of which has the same size . Then    "
},
{
  "id": "provemultruleforpartsexer",
  "level": "2",
  "url": "sets_counting_section.html#provemultruleforpartsexer",
  "type": "Checkpoint",
  "number": "1.5",
  "title": "",
  "body": " Use the addition principle for partitions to prove the multiplication rule for partitions. "
},
{
  "id": "sets_counting_section-4-6",
  "level": "2",
  "url": "sets_counting_section.html#sets_counting_section-4-6",
  "type": "Proposition",
  "number": "1.6",
  "title": "Multiplication Principle for a Sequence of Decisions.",
  "body": " Multiplication Principle for a Sequence of Decisions   Suppose that every element of a finite set is uniquely specified by a sequence of choices, such that there are ways to make the first choice; then, having made the first choice, there are ways to make the second choice (no matter how the first choice was made); and so on; finally, having made the -st choice, there are ways to make the -th choice (no matter how the previous choices were made). Then we have    "
},
{
  "id": "sizeofcartprodexer",
  "level": "2",
  "url": "sets_counting_section.html#sizeofcartprodexer",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": " Use the multiplication principle to show that for finite sets .  "
},
{
  "id": "permfinsetformula",
  "level": "2",
  "url": "sets_counting_section.html#permfinsetformula",
  "type": "Proposition",
  "number": "1.8",
  "title": "Permutations of a finite set.",
  "body": " Permutations of a finite set  Let be a finite set. The number of permutations (or orderings) of the elements of is .   "
},
{
  "id": "seqpermdefexer",
  "level": "2",
  "url": "sets_counting_section.html#seqpermdefexer",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "",
  "body": "Let .  Write out the elements of the set .  Write out the elements of the set .  Write out the elements of the set .  Write out the elements of the set .  Write out the elements of the set .    "
},
{
  "id": "sets_counting_section-5-5",
  "level": "2",
  "url": "sets_counting_section.html#sets_counting_section-5-5",
  "type": "Proposition",
  "number": "1.10",
  "title": "Counting sequences.",
  "body": " Counting sequences   Let be a finite set. We have the following.    "
},
{
  "id": "sets_counting_section-5-6",
  "level": "2",
  "url": "sets_counting_section.html#sets_counting_section-5-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "number of permutations of items chosen at a time. "
},
{
  "id": "seqpermcountprfexer",
  "level": "2",
  "url": "sets_counting_section.html#seqpermcountprfexer",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "Use the multiplication principle to justify and .   "
},
{
  "id": "sets_counting_section-6-2",
  "level": "2",
  "url": "sets_counting_section.html#sets_counting_section-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "number of combinations of items chosen at a time "
},
{
  "id": "binomialthmcoeffexer",
  "level": "2",
  "url": "sets_counting_section.html#binomialthmcoeffexer",
  "type": "Checkpoint",
  "number": "1.12",
  "title": "",
  "body": " The binomial formula is the algebraic identity Use counting principles to explain why this is true.  "
},
{
  "id": "countableuncountabledefexer",
  "level": "2",
  "url": "sets_counting_section.html#countableuncountabledefexer",
  "type": "Checkpoint",
  "number": "1.13",
  "title": "",
  "body": "  Give an example of a function that is one-to-one and onto, and that is not the identity function.  Give an example of a function that is one-to-one but not onto.  Give an example of a function that is onto but not one-to-one.  Give an example of a function that is neither one-to-one nor onto, and that is not a constant function.  Let be the set of all sequences in . Suppose that is one-to-one and onto. Define an element of by . Is it possible that is in the image of ? What do you conclude about ?   Hint for the last part ( ).  Make grid-format layout to help see what is going on. In the notation in this layout, the doubly-indexed value is equal to . This means that . Now think about how looks. Is it possible that could equal for some ? What consequence does this imply about our assumption that is onto?    "
},
{
  "id": "setscountingexerrossandwright",
  "level": "2",
  "url": "sets_counting_section.html#setscountingexerrossandwright",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": "Work the Sets and Counting exercise set posted on Canvas.  "
},
{
  "id": "probability_finite_section",
  "level": "1",
  "url": "probability_finite_section.html",
  "type": "Section",
  "number": "2",
  "title": "Finite Probability Models",
  "body": " Finite Probability Models   Probability models are mathematical frameworks that help us think about chance processes whose outcomes cannot be predicted with certainty. We begin with one of the simplest types of probability models, in which the set of possible outcomes of a chance process is finite.   Vocabulary and Properties   A finite probability function is a function , where is a finite set, and where satisfies    The next definition extends the assignments of probabilities to subsets of . Recall that the power set  of a set is the set of all subsets of .   A finite probability measure is a function be given by for , where is a finite probability function.   Comment on notation: For a single element in , it is common practice to write as a shorthand for .  Finite probability model  A finite probability model is a pair , where is a finite set, and where is a finite probability measure on . The set is called the probability space of the model. Elements of are called outcomes , and elements of are called events .    Write the probability function for the probability space where outcome is twice as likely as outcome , and outcome is three times as likely as outcome .   More probability terminology  Let be a finite probability model. The complement of an event is also called the opposite of . Disjoint events (that is, are also called mutually exclusive . Given events with , the conditional probability of given , denoted , is defined to be Events are called independent if . Otherwise, are called dependent .    Let , let , and let . Give an example of a probability function on for which are independent. Give an example of a probability function on for which are dependent.    Properties of probability  Let be a finite probability model. The following properties hold.  .  If for some events , then .  (addition rule) If events are disjoint, then .   (opposite rule) For any event , we have .  (multiplication rule) For any events such that , we have .  Let be events with . Events are independent if and only if .      Prove all the parts of .     Random Samples  Let be a finite probability model with probability function , and let be a positive integer. Let be defined by It is easy to check (see below) that is a probability function. Let denote the corresponding probability measure. The probability model is called the space of (random) samples of size  taken from the space . The space models the outcomes that are obtained by repetitions of the chance process that produces outcomes in .    Show that is a probability function.  Let be an event in , and let be the event in , where denotes . Show that   Let be events in , and let be the events and . Show that are independent in if .       Simple Random Samples  Let be a finite probability space with , and with the constant probability function for all . Let denote the set of all one-to-one sequences We use the nonstandard notation , rather than the standard notation , to denote the set of permutations of elements of , in order to avoid confusion with probability measures, which are also denoted using capital letter P. in of size . An element of is called a simple random sample of size  taken from a probability space . Let be given by the constant function for all . It is easy to check (see below) that is a probability function. Let denote the corresponding probability measure. The probability model is called the space of simple random samples of size  taken from the space (or the space of samples of size taken from  without replacement ).     Show that is a probability function.  Let be an event in , and let be the event in , where denotes . Show that   Let be events in , and let be the events and . Show by example that that may be dependent in if .      Bayes' Rule  Bayes' Rule can be viewed as a practical method for finding conditional probabilities. For events in a probability space , where both probabilities are nonzero, the definition of conditional probability gives us two ways to write , namely Dividing the last two terms by leads to the following, which is a basic form of Bayes' Rule. A use case for this version of Bayes' Rule is a problem in which you know the probabilities in the expression on the right, and you wish to find the probability on the left. In effect, this allows you to use to find .  In a more nuanced form of Bayes' Rule, the event is one of of a collection of events that form a partition of , say, . In this case, we have Substituting , and substituting the last expression for in , we have the following form of Bayes' Rule.   Terminology comment: Equations and are sometimes called the law of total probability .     Justify all the steps in the derivation for Bayes' Rule.  Find the sets and for medical testing scenario (what is the chance of having the disease given a positive test result?)      Probability Exercises   Do exercises 1 and 2 in Section 1.7.2 of .    More exercises with solutions.    Work the Probability Exercises set posted on Canvas.    "
},
{
  "id": "finprobfndef",
  "level": "2",
  "url": "probability_finite_section.html#finprobfndef",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": " A finite probability function is a function , where is a finite set, and where satisfies   "
},
{
  "id": "finprobmeasdef",
  "level": "2",
  "url": "probability_finite_section.html#finprobmeasdef",
  "type": "Definition",
  "number": "2.2",
  "title": "",
  "body": " A finite probability measure is a function be given by for , where is a finite probability function.  "
},
{
  "id": "finiteprobmodeldef",
  "level": "2",
  "url": "probability_finite_section.html#finiteprobmodeldef",
  "type": "Definition",
  "number": "2.3",
  "title": "Finite probability model.",
  "body": "Finite probability model  A finite probability model is a pair , where is a finite set, and where is a finite probability measure on . The set is called the probability space of the model. Elements of are called outcomes , and elements of are called events .  "
},
{
  "id": "probfnexer",
  "level": "2",
  "url": "probability_finite_section.html#probfnexer",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "",
  "body": " Write the probability function for the probability space where outcome is twice as likely as outcome , and outcome is three times as likely as outcome .  "
},
{
  "id": "finprobmodelvocabdef",
  "level": "2",
  "url": "probability_finite_section.html#finprobmodelvocabdef",
  "type": "Definition",
  "number": "2.5",
  "title": "More probability terminology.",
  "body": "More probability terminology  Let be a finite probability model. The complement of an event is also called the opposite of . Disjoint events (that is, are also called mutually exclusive . Given events with , the conditional probability of given , denoted , is defined to be Events are called independent if . Otherwise, are called dependent .  "
},
{
  "id": "finiteindepdepexer",
  "level": "2",
  "url": "probability_finite_section.html#finiteindepdepexer",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "",
  "body": " Let , let , and let . Give an example of a probability function on for which are independent. Give an example of a probability function on for which are dependent.  "
},
{
  "id": "probprops",
  "level": "2",
  "url": "probability_finite_section.html#probprops",
  "type": "Proposition",
  "number": "2.7",
  "title": "Properties of probability.",
  "body": " Properties of probability  Let be a finite probability model. The following properties hold.  .  If for some events , then .  (addition rule) If events are disjoint, then .   (opposite rule) For any event , we have .  (multiplication rule) For any events such that , we have .  Let be events with . Events are independent if and only if .    "
},
{
  "id": "probability_finite_section-3-11",
  "level": "2",
  "url": "probability_finite_section.html#probability_finite_section-3-11",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "",
  "body": " Prove all the parts of .  "
},
{
  "id": "finiterandsampsect-2",
  "level": "2",
  "url": "probability_finite_section.html#finiterandsampsect-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(random) samples of size  "
},
{
  "id": "productprobfnexer",
  "level": "2",
  "url": "probability_finite_section.html#productprobfnexer",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "",
  "body": "  Show that is a probability function.  Let be an event in , and let be the event in , where denotes . Show that   Let be events in , and let be the events and . Show that are independent in if .    "
},
{
  "id": "probability_finite_section-5-2",
  "level": "2",
  "url": "probability_finite_section.html#probability_finite_section-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple random sample of size  simple random samples of size  without replacement "
},
{
  "id": "simprandsampprobfnexer",
  "level": "2",
  "url": "probability_finite_section.html#simprandsampprobfnexer",
  "type": "Checkpoint",
  "number": "2.10",
  "title": "",
  "body": "   Show that is a probability function.  Let be an event in , and let be the event in , where denotes . Show that   Let be events in , and let be the events and . Show by example that that may be dependent in if .    "
},
{
  "id": "probability_finite_section-6-2",
  "level": "2",
  "url": "probability_finite_section.html#probability_finite_section-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bayes' Rule "
},
{
  "id": "bayesintroexer",
  "level": "2",
  "url": "probability_finite_section.html#bayesintroexer",
  "type": "Checkpoint",
  "number": "2.11",
  "title": "",
  "body": "   Justify all the steps in the derivation for Bayes' Rule.  Find the sets and for medical testing scenario (what is the chance of having the disease given a positive test result?)    "
},
{
  "id": "probability_finite_section-7-2",
  "level": "2",
  "url": "probability_finite_section.html#probability_finite_section-7-2",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": " Do exercises 1 and 2 in Section 1.7.2 of .  "
},
{
  "id": "probability_finite_section-7-3",
  "level": "2",
  "url": "probability_finite_section.html#probability_finite_section-7-3",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": " More exercises with solutions.   "
},
{
  "id": "probexerrossandwright",
  "level": "2",
  "url": "probability_finite_section.html#probexerrossandwright",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "Work the Probability Exercises set posted on Canvas.  "
},
{
  "id": "probability_general_section",
  "level": "1",
  "url": "probability_general_section.html",
  "type": "Section",
  "number": "3",
  "title": "General Probability Models",
  "body": " General Probability Models   In general, a probability model is a pair , where is a set, and where is a function on a subset of the power set of . What all probability models have in common are the vocabulary ( ) and properties ( ) that you have already seen for finite probability models in the previous section. We begin with a generalization of the finite probability model.    Discrete Probability Models  The definitions ( , , ) for a finite probability model generalize naturally for countably infinite probability spaces. The only necessary change is to replace the word finite with the phrase finite or countably infinite . Together, finite probability models and their countably infinite generalizations are called discrete probability models .   A probability function on a finite or countably infinite set is a function that satisfies . A discrete probability measure on a finite or countably infinite space is a function given by for , where is a probability function on . A discrete probability model is a pair , where is a finite or countably infinite set, and where is a discrete probability measure on .   Example. Let , and let given by .    Show that is a probability function.  Find the probability of the event .  Find the probability of the event .     Samples from probability models. For a discrete probability model with probability function , we define the probability space of samples of size from to be the space with probability function defined by .   Show that the function is indeed a probability function.  Do simple random samples make sense for infinite probability spaces?       Uncountable probability spaces  For an uncountable set , it is impossible to have a probability function. That is, there does not exist any function that satisfies . Nevertheless, it is possible to define a probability measure in a way that satisfies all of the properties in by restricting the set of events to a proper subset of the power set . In these notes, we will omit the technical details for how this is done. Instead we will illustrate with two examples.  Why not? Why is it impossible to have a probability function on an uncountable set?   Uniform probability measures. Let be the set of points inside of a geometric figure with a finite area or volume, say, a two-dimensional figure with area equal to square units. Given any rectangle , define to be This probability measure is uniform in the sense that it doesn't matter where is located with . The probability of is completely determined by its area. Similarly, the uniform probability measure on an interval of real numbers is given by for any interval .  Infinite sequences of coin tosses Let be the set of infinite sequences of tosses of a fair coin. For , each entry is one of the two outcomes in the probability space ( is for coin , is for heads , and is for tails ) with probability function . Now suppose that , so that (see ). Let is the subset of defined by If it is possible to define a probability measure , then intuition demands that we must have In fact it turns out that such a probability measure exists. We will not give the full details for how it is constructed. Happily, it turns out that give us what we need to work with the probability space .     Explain why is uncountable.  Find the probability that the first head in an infinite sequence of tosses occurs on toss number 5.      Samples from uncountable probability models. For an uncountable probability model , we define the probability space of samples of size from to be the space with probability measure defined by where are events in .  Check one or more properties of probability from for one or more special cases for .      Solve one or more problems in .    Search for probability problems. Present one or more problems and solutions that you found instructive, or amusing, or both.    "
},
{
  "id": "probability_general_section-3-3",
  "level": "2",
  "url": "probability_general_section.html#probability_general_section-3-3",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": " A probability function on a finite or countably infinite set is a function that satisfies . A discrete probability measure on a finite or countably infinite space is a function given by for , where is a probability function on . A discrete probability model is a pair , where is a finite or countably infinite set, and where is a discrete probability measure on .  "
},
{
  "id": "infdiscretespaceexampleexer",
  "level": "2",
  "url": "probability_general_section.html#infdiscretespaceexampleexer",
  "type": "Checkpoint",
  "number": "3.2",
  "title": "",
  "body": "  Show that is a probability function.  Find the probability of the event .  Find the probability of the event .    "
},
{
  "id": "probability_general_section-3-6",
  "level": "2",
  "url": "probability_general_section.html#probability_general_section-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "samples of size "
},
{
  "id": "discretesampleprobfnexer",
  "level": "2",
  "url": "probability_general_section.html#discretesampleprobfnexer",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "",
  "body": " Show that the function is indeed a probability function.  Do simple random samples make sense for infinite probability spaces?    "
},
{
  "id": "whynoprobfnuncoutableexer",
  "level": "2",
  "url": "probability_general_section.html#whynoprobfnuncoutableexer",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "",
  "body": "Why not? Why is it impossible to have a probability function on an uncountable set?  "
},
{
  "id": "seqoftossesexer",
  "level": "2",
  "url": "probability_general_section.html#seqoftossesexer",
  "type": "Checkpoint",
  "number": "3.5",
  "title": "",
  "body": "   Explain why is uncountable.  Find the probability that the first head in an infinite sequence of tosses occurs on toss number 5.    "
},
{
  "id": "probability_general_section-4-7",
  "level": "2",
  "url": "probability_general_section.html#probability_general_section-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "samples of size "
},
{
  "id": "probpropsuncountableexer",
  "level": "2",
  "url": "probability_general_section.html#probpropsuncountableexer",
  "type": "Checkpoint",
  "number": "3.6",
  "title": "",
  "body": "Check one or more properties of probability from for one or more special cases for .  "
},
{
  "id": "probability_general_section-5-1",
  "level": "2",
  "url": "probability_general_section.html#probability_general_section-5-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": " Solve one or more problems in .  "
},
{
  "id": "probability_general_section-5-2",
  "level": "2",
  "url": "probability_general_section.html#probability_general_section-5-2",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": " Search for probability problems. Present one or more problems and solutions that you found instructive, or amusing, or both.  "
},
{
  "id": "rand_vars_discrete_section",
  "level": "1",
  "url": "rand_vars_discrete_section.html",
  "type": "Section",
  "number": "4",
  "title": "Discrete Random Variables",
  "body": " Discrete Random Variables   A random variable is a function , where is a probability model and is a set. For discrete probability models, this is the end of the definition; for general (possibly uncountable) probability models, further technical specifications are required to define random variables. Fortunately, the theory of random variables on discrete probability spaces will provide practical ways to think about and use continuous random variables without having to be concerned about every detail of general probability spaces. A random variable is called quantitative if its image is any subset of the real numbers; otherwise, a random variable is called qualitative . A random variable is called discrete if its image is finite or countably infinite; otherwise, a random variable is called continuous . In this section, we will develop vocabulary and facts for quantitative random variables whose underlying probability models are discrete.   Definitions and properties    Events defined by random variables  Let be a discrete probability model and let be a random variable. Given a subset , we define the event by In particular, if is a quantitative random variable and is a real number, the event is the event     Make up one or more examples of a qualitative random variable and a quantitative random variable on a finite probability with five or so elements. For both variables, choose some subsets of the codomain and find the events .    Let be discrete random variable. The (cumulative) distribution function (or c.d.f. ) for is the function defined by    Make up one or more examples of a quantitative random variable on a finite probability space with five or so elements and sketch a graph of the distribution function.    Properties of distribution functions  Let be a discrete random variable. The distribution function has the following properties.  is nondecreasing, that is, if then .  is continuous from the right, that is, for all .  and .     Prove the properties in . Illustrate how the properties look in the examples you made up in the Checkpoints above.   Vocabulary related to the distribution function. The distribution function provides a ranking of the values of a random variable, for which we use the following vocabulary. Let be a real number, and let . We say that has the quantile rank , and we say that has -th percentile rank. These terms are used whether or not is an actual value of for some .  If were invertible, then we could choose any and solve the equation . It would be natural to say that the solution is the  -th percentile value of . But distribution functions of discrete random variables are not invertible. The set of solutions to an equation is either empty or consists of an interval . This means that we have to make slightly artificial definitions if we wish to refer to the -th percentile value for . If , then the -th percentile value of is defined to the be smallest number such that . If , then the th percentile value of is defined to be . With these definitions, the median is the -th percentile value. The upper quartile is the -th percentile value, and the lower quartile is the -th percentile value. The interquartile range (IQR) is the upper quartile minus the lower quartile.  Explain and give examples about the statements regarding the possibilities for for a discrete random variable.   Box plots. A box plot (or a box and whiskers plot) is a visual representation of some basic features of a random variable. One dimension of the box (it can be horizontal width or the vertical height, let's say it is the horizontal width) is arbitrary; the other dimension (the vertical height, in this description) is equal to the interquartile range. A vertical scale is drawn on one side or the other of the box. A horizontal line from one vertical side of the box to the other is drawn at the height of the median. Vertical extensions (the whiskers ) from the top and bottom of the box extend to the maximum and minimum values of the random variable.   Find examples of box plots. Pick a style you like and make a bunch for yourself.     Histograms  Let be a distribution function for a random variable . Let be a closed interval of the real line, and let be a partition , that is, we have Let denote the interval . Let denote the width of , and let . We define to be a rectangular region so that the area of is . The histogram for on with partition is a collection of rectangular regions . The intervals are called the class intervals for the histogram.    A frequently used alternative convention for histograms is to switch the closed and open ends of the class intervals, that is, to use . When the distinction has to be made clear, we say that uses the left endpoint convention , while the usual definition uses the right endpoint convention . In the case of the left endpoint convention, is still defined to be . Write an expression for the left endpoint convention version in terms of the distribution function .  What would be wrong about using ?  For a random variable whose values are whole numbers only, it is common to use class intervals with edges on half-integers (that is, for some integer , for every ). Why is this better than using class intervals with edge points on whole numbers?  Generate data (a list of numbers) in the interval . Choose three different partitions: one partition with 3 intervals, another partition with 5 intervals, and another partition with 7 intervals. Draw the histogram for each partition.      Expectation  Here is a simple example that motivates the notion of expected value. Suppose you play a dice game in which you win two dollars every time your dice roll comes up showing the six face, and you lose a dollar if you roll something different from a six. In 600 rolls, you would expect to roll a six about 100 times. From this you would gain 200 dollars. You would expect to roll something different from a six about 500 times. From this you would lose 500 dollars. Your net gain is dollars, which averages to dollars per roll. You could have found this by the calculation This is a sum of the form , where value is the value of a random variable in this case, win\/loss per roll. Here is the formal mathematical definition.  Let be a random variable on a discrete probability space with probability function . The expected value of , denoted , is defined to be The expected value of a random variable is also called its average or mean , and we write (or just , if is clear from context) for . It is sometimes useful to group the summands in as follows.      Make up several random variables on small finite probability spaces. Calculate their expected values.   Let be random variables on a discrete probability space. Show that the following hold.   Justify .     Variance and standard deviation are measures of the spread of a random variable about its mean. The variance of , denoted or (or just , if is understood), is The standard deviation of , denoted or (or just ), is the square root of the variance.     Calculate the variance for each of the examples you made up in the previous Checkpoint.  Let be a random variable and let be constants. Show that   Show the two expressions for variance are equal.     Standardized random variables. A random variable is said to be standardized if and . If is any random variable with and , then the variable is standardized.  Verify the last claim above.     One basic example  In a later section, we will introduce several important random variables that arise naturally from samples taken from probability spaces. Many of these sample variables begin with the simplest possible probability with just two outcomes. Here are the definitions.   A Bernoulli variable is a discrete random variable that has exactly two values, and . It is traditional to use the symbols to denote the probabilities and .   In the definition of Bernoulli variable, the probability space is not specified. The simplest possible probability space for a Bernoulli variable is a 2-element set (where might represent outcomes heads and tails , or win and lose , or yes and no , etc.), with probability function , . However, the sample space for a Bernoulli variable could have any number of elements.   Show that and for a Bernoulli variable .  Find a 10-element probability space and probability function for a Bernoulli variable with . Find an infinite probability space and probability function for a Bernoulli variable with .      Independence and covariance  Let be random variables on the same sample space. The joint distribution function  is given by Variables are called independent if for all . If are not independent, they are called dependent . The covariance of and , denoted is     Let be random variables and let be constants.  Show that   Show that      If are independent, then .    Show by example that the converse of is false.      Show that two discrete random variables on a finite sample space are independent if and only if for every pair of sets . This demonstrates why we use the term independent .    "
},
{
  "id": "rand_vars_discrete_section-2-1",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random variable quantitative qualitative discrete continuous "
},
{
  "id": "rand_vars_discrete_section-3-2",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-3-2",
  "type": "Definition",
  "number": "4.1",
  "title": "Events defined by random variables.",
  "body": " Events defined by random variables  Let be a discrete probability model and let be a random variable. Given a subset , we define the event by In particular, if is a quantitative random variable and is a real number, the event is the event   "
},
{
  "id": "qualquantrandvarsegexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#qualquantrandvarsegexer",
  "type": "Checkpoint",
  "number": "4.2",
  "title": "",
  "body": " Make up one or more examples of a qualitative random variable and a quantitative random variable on a finite probability with five or so elements. For both variables, choose some subsets of the codomain and find the events .  "
},
{
  "id": "rand_vars_discrete_section-3-4",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-3-4",
  "type": "Definition",
  "number": "4.3",
  "title": "",
  "body": " Let be discrete random variable. The (cumulative) distribution function (or c.d.f. ) for is the function defined by  "
},
{
  "id": "distfnegexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#distfnegexer",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "",
  "body": " Make up one or more examples of a quantitative random variable on a finite probability space with five or so elements and sketch a graph of the distribution function.  "
},
{
  "id": "distribfunproperties",
  "level": "2",
  "url": "rand_vars_discrete_section.html#distribfunproperties",
  "type": "Proposition",
  "number": "4.5",
  "title": "Properties of distribution functions.",
  "body": " Properties of distribution functions  Let be a discrete random variable. The distribution function has the following properties.  is nondecreasing, that is, if then .  is continuous from the right, that is, for all .  and .    "
},
{
  "id": "distfnpropexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#distfnpropexer",
  "type": "Checkpoint",
  "number": "4.6",
  "title": "",
  "body": "Prove the properties in . Illustrate how the properties look in the examples you made up in the Checkpoints above.  "
},
{
  "id": "rand_vars_discrete_section-3-8",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quantile percentile "
},
{
  "id": "rand_vars_discrete_section-3-9",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-3-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "median upper quartile lower quartile interquartile range "
},
{
  "id": "percentilepossibilitiesexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#percentilepossibilitiesexer",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "",
  "body": "Explain and give examples about the statements regarding the possibilities for for a discrete random variable.  "
},
{
  "id": "boxplotsegexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#boxplotsegexer",
  "type": "Checkpoint",
  "number": "4.8",
  "title": "",
  "body": " Find examples of box plots. Pick a style you like and make a bunch for yourself.  "
},
{
  "id": "rand_vars_discrete_section-4-2",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "histogram class intervals "
},
{
  "id": "historgramvarsexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#historgramvarsexer",
  "type": "Checkpoint",
  "number": "4.9",
  "title": "",
  "body": "  A frequently used alternative convention for histograms is to switch the closed and open ends of the class intervals, that is, to use . When the distinction has to be made clear, we say that uses the left endpoint convention , while the usual definition uses the right endpoint convention . In the case of the left endpoint convention, is still defined to be . Write an expression for the left endpoint convention version in terms of the distribution function .  What would be wrong about using ?  For a random variable whose values are whole numbers only, it is common to use class intervals with edges on half-integers (that is, for some integer , for every ). Why is this better than using class intervals with edge points on whole numbers?  Generate data (a list of numbers) in the interval . Choose three different partitions: one partition with 3 intervals, another partition with 5 intervals, and another partition with 7 intervals. Draw the histogram for each partition.    "
},
{
  "id": "rand_vars_discrete_section-5-3",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expected value of "
},
{
  "id": "expectationintroexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#expectationintroexer",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "",
  "body": "   Make up several random variables on small finite probability spaces. Calculate their expected values.   Let be random variables on a discrete probability space. Show that the following hold.   Justify .    "
},
{
  "id": "rand_vars_discrete_section-5-5",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-5-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variance standard deviation "
},
{
  "id": "varianceintroexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#varianceintroexer",
  "type": "Checkpoint",
  "number": "4.11",
  "title": "",
  "body": "   Calculate the variance for each of the examples you made up in the previous Checkpoint.  Let be a random variable and let be constants. Show that   Show the two expressions for variance are equal.    "
},
{
  "id": "rand_vars_discrete_section-5-7",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-5-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standardized "
},
{
  "id": "standardvarexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#standardvarexer",
  "type": "Checkpoint",
  "number": "4.12",
  "title": "",
  "body": "Verify the last claim above.  "
},
{
  "id": "rand_vars_discrete_section-6-3",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-6-3",
  "type": "Definition",
  "number": "4.13",
  "title": "",
  "body": " A Bernoulli variable is a discrete random variable that has exactly two values, and . It is traditional to use the symbols to denote the probabilities and .  "
},
{
  "id": "bernoulliexpectvarexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#bernoulliexpectvarexer",
  "type": "Checkpoint",
  "number": "4.14",
  "title": "",
  "body": " Show that and for a Bernoulli variable .  Find a 10-element probability space and probability function for a Bernoulli variable with . Find an infinite probability space and probability function for a Bernoulli variable with .    "
},
{
  "id": "rand_vars_discrete_section-7-2",
  "level": "2",
  "url": "rand_vars_discrete_section.html#rand_vars_discrete_section-7-2",
  "type": "Definition",
  "number": "4.15",
  "title": "",
  "body": "Let be random variables on the same sample space. The joint distribution function  is given by Variables are called independent if for all . If are not independent, they are called dependent . The covariance of and , denoted is   "
},
{
  "id": "covarsumexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#covarsumexer",
  "type": "Checkpoint",
  "number": "4.16",
  "title": "",
  "body": " Let be random variables and let be constants.  Show that   Show that    "
},
{
  "id": "indepimpliescovarzero",
  "level": "2",
  "url": "rand_vars_discrete_section.html#indepimpliescovarzero",
  "type": "Proposition",
  "number": "4.17",
  "title": "",
  "body": " If are independent, then .  "
},
{
  "id": "covarexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#covarexer",
  "type": "Checkpoint",
  "number": "4.18",
  "title": "",
  "body": " Show by example that the converse of is false.  "
},
{
  "id": "randvarsfiniteindepiffalleventsindepexer",
  "level": "2",
  "url": "rand_vars_discrete_section.html#randvarsfiniteindepiffalleventsindepexer",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "",
  "body": " Show that two discrete random variables on a finite sample space are independent if and only if for every pair of sets . This demonstrates why we use the term independent .  "
},
{
  "id": "rand_vars_cts_section",
  "level": "1",
  "url": "rand_vars_cts_section.html",
  "type": "Section",
  "number": "5",
  "title": "Continuous Random Variables",
  "body": " Continuous Random Variables   General distribution functions    It turns out that the properties given in hold for all quantitative random variables, whether discrete or continuous, and no matter whether the underlying probability model is discrete or general. Even better, it turns out See , Theorem 1.5.3, p.31. that if is any function that satisfies the three properties in , then there exists a probability model and a random variable such that .  Distribution functions for discrete random variables are piecewise constant functions that are discontinuous. The properties in allow for the possibility of continuous distribution functions. The simplest of these is the following.  The uniform distribution function on the interval is given by        Sketch the graph of the uniform distribution function.  Show that the uniform distribution function satisfies the three properties of .  Show that the uniform distribution function defined in is the distribution function for the variable given by , and where probability measure on is the uniform probability measure for subsets of , and the probability measure is zero for subsets outside of .     A random variable is called continuous if its distribution function is continuous on all of the real line. If the distribution function of a random variable is differentiable (or piecewise differentiable, with at most a finite or countably infinite number of points of nondifferentiability), then the derivative is called the probability density function for . If has a probability density function , then we have, for all intervals ,      Sketch the graph of the probability density function for the uniform distribution function.  Show that, if is an integrable function with , then is the probability density function of some random variable with distribution function that satisfies .  Justify .     If is a continuous random variable with probability density function , then is given by if the improper integral on the right converges. If both of the integrals converge, then the variance of is given by    Explain how the formula for expected value of a continuous random variable connects to expected value for a discrete variable.      Let be constants, and let be given by   Find all values of such that is a density function.  For each density function , find the corresponding distribution function .  Let be a random variable with distribution function . Find all values of such that exists. Find all values of such that exists.      Let be continuous random variables, and suppose there exist intervals , such that . Show that are dependent variables. That is, show that for some .    "
},
{
  "id": "genldistfnsubsect-3",
  "level": "2",
  "url": "rand_vars_cts_section.html#genldistfnsubsect-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform "
},
{
  "id": "unifdistdefexer",
  "level": "2",
  "url": "rand_vars_cts_section.html#unifdistdefexer",
  "type": "Checkpoint",
  "number": "5.2",
  "title": "",
  "body": "   Sketch the graph of the uniform distribution function.  Show that the uniform distribution function satisfies the three properties of .  Show that the uniform distribution function defined in is the distribution function for the variable given by , and where probability measure on is the uniform probability measure for subsets of , and the probability measure is zero for subsets outside of .    "
},
{
  "id": "genldistfnsubsect-5",
  "level": "2",
  "url": "rand_vars_cts_section.html#genldistfnsubsect-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous probability density "
},
{
  "id": "unifdensfnexer",
  "level": "2",
  "url": "rand_vars_cts_section.html#unifdensfnexer",
  "type": "Checkpoint",
  "number": "5.3",
  "title": "",
  "body": "   Sketch the graph of the probability density function for the uniform distribution function.  Show that, if is an integrable function with , then is the probability density function of some random variable with distribution function that satisfies .  Justify .    "
},
{
  "id": "expectvalueriemannsumtoctsexer",
  "level": "2",
  "url": "rand_vars_cts_section.html#expectvalueriemannsumtoctsexer",
  "type": "Checkpoint",
  "number": "5.4",
  "title": "",
  "body": " Explain how the formula for expected value of a continuous random variable connects to expected value for a discrete variable.  "
},
{
  "id": "powerfndensexer",
  "level": "2",
  "url": "rand_vars_cts_section.html#powerfndensexer",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": " Let be constants, and let be given by   Find all values of such that is a density function.  For each density function , find the corresponding distribution function .  Let be a random variable with distribution function . Find all values of such that exists. Find all values of such that exists.    "
},
{
  "id": "dependentctsvarexer",
  "level": "2",
  "url": "rand_vars_cts_section.html#dependentctsvarexer",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": " Let be continuous random variables, and suppose there exist intervals , such that . Show that are dependent variables. That is, show that for some .  "
},
{
  "id": "sampling1_section",
  "level": "1",
  "url": "sampling1_section.html",
  "type": "Section",
  "number": "6",
  "title": "Sampling I",
  "body": " Sampling I   Sampling Random Variables  Let be a probability space. Recall that an element of is called a random sample from . We extend this sampling language to random variables on as follows. Given a random variable , let be random variables given by for . We call the collection a (random) sample of . Intuitively, the variables behave like independent copies of . That this is the case is the content of the following proposition.  > Let be a sample of a random variable with and . We have the following.     Prove for the case of discrete variables.    Next, we consider random variables and , called the sample average and the sample variance , defined as follows. The quantity (the square root of the sample variance) is called the sample standard deviation . The quantity is called the sample sum . In general, any random variable written as a function of is called a (sample) statistic . The sample statistics play a key role in sampling theory. Here are some important properties.   Let be a probability model and let be a random variable. Let be sample variables for a sample of of size . Let , and let . We have the following.    Comments and terminology. The last equation explains the strange-looking denominator in . The square roots of the variances and are usually denoted and , respectively. The quantity is called the standard error for the sample average. The quantity is called the standard error for the sample sum.   Prove for the case of discrete variables.      Simple random sample variables  Let be a finite probability space with and with constant probability function for all . Recall that denotes the set of all one-to-one sequences of length in , called simple random samples of size taken from . Recall that the probability function is constant, with constant value . Given a random variable , we define sample random variables on by the same formula as for ordinary sample variables. We call the -tuple of variables on a simple random sample of size  of . As for ordinary samples, the simple random sample variables look like copies of . However, in contrast with the ordinary sample case, the simple random sample variables are dependent . Here are some key properties.   Simple random samples of a random variable  Let be a finite probability space with and with a constant probability function. Let be a simple random sample of a random variable with and . We have the following.    Terminology: Simple random samples are also called samples taken without replacement , or survey samples . This refers to the applied scenario in which the probability space models a human population, where each individual in the population has the same chance of being selected for a survey (or some kind of measurement). Once surveyed, that individual will not be surveyed again; in other words, survey samples produce one-to-one sequences. As for ordinary samples, the quantities (the square roots of the variances and , respectively) are called standard errors . The quantity that occurs in both standard errors is called the correction factor for the standard errors when sampling without replacement (or for simple random sampling, or for survey sampling).   Prove .     Some important variables arising from sampling  Let be a Bernoulli variable with and . Let be an infinite sequence of samples of . Each random variable is called a binomial random variable. Let be defined by if is the lowest index such that , that is, if and . The variable is called a geometric random variable. It is easy to show that the cdf is given by for . The continuous function given by satisfies the properties of a distribution function. By the fact alluded to in the opening paragraph of , it follows that there exists a random variable such that is the distribution function of . The variable is called the exponential random variable with parameter .     Find the mean, and the variance for the binomial random variable .  Verify that the distribution function satisfies for .  Find the probability density function and find the mean and the variance for the exponential distribution.     The (standard) normal variable plays a key role in sampling theory, due to the Central Limit Theorem, which we study below. In this paragraph we describe how the standard normal variable arises as a limit process applied to a sequence of binomial variables. Let be a Bernoulli variable with . It is easy to check that and . Let be an infinite sequence of samples of , and let be the binomial variable . Using the sampling formulas and , we have and . Let be the normalized version of . It turns out that there is exists a limit function , which means that for every real number . The limit function satisfies the properties of a distribution function. By the fact alluded to in the opening paragraph of , it follows that there exists a random variable such that is the distribution function of . The variable is called the (standard) normal variable. It is also called a Gaussian variable, in honor of C.F. Gauss, who discovered it. The standard normal distribution has a mean of zero, a standard deviation of 1, and has probability density function    Work through the examples in Section 1.4.2 and the exercises in Section 1.4.3 in Section 1.4 in .     "
},
{
  "id": "sampling1_section-2-2",
  "level": "2",
  "url": "sampling1_section.html#sampling1_section-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(random) sample "
},
{
  "id": "sampvarbasicprop",
  "level": "2",
  "url": "sampling1_section.html#sampvarbasicprop",
  "type": "Proposition",
  "number": "6.1",
  "title": "",
  "body": "> Let be a sample of a random variable with and . We have the following.   "
},
{
  "id": "samplevarpropdiscreteexer",
  "level": "2",
  "url": "sampling1_section.html#samplevarpropdiscreteexer",
  "type": "Checkpoint",
  "number": "6.2",
  "title": "",
  "body": " Prove for the case of discrete variables.  "
},
{
  "id": "sampling1_section-2-5",
  "level": "2",
  "url": "sampling1_section.html#sampling1_section-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample average sample variance sample standard deviation sample sum (sample) statistic "
},
{
  "id": "sampstatsbasicprop",
  "level": "2",
  "url": "sampling1_section.html#sampstatsbasicprop",
  "type": "Proposition",
  "number": "6.3",
  "title": "",
  "body": " Let be a probability model and let be a random variable. Let be sample variables for a sample of of size . Let , and let . We have the following.   "
},
{
  "id": "sampling1_section-2-7",
  "level": "2",
  "url": "sampling1_section.html#sampling1_section-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard error standard error "
},
{
  "id": "sampstatsbasicpropexer",
  "level": "2",
  "url": "sampling1_section.html#sampstatsbasicpropexer",
  "type": "Checkpoint",
  "number": "6.4",
  "title": "",
  "body": " Prove for the case of discrete variables.   "
},
{
  "id": "sampling1_section-3-2",
  "level": "2",
  "url": "sampling1_section.html#sampling1_section-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple random sample "
},
{
  "id": "simprandsampprop",
  "level": "2",
  "url": "sampling1_section.html#simprandsampprop",
  "type": "Proposition",
  "number": "6.5",
  "title": "Simple random samples of a random variable.",
  "body": " Simple random samples of a random variable  Let be a finite probability space with and with a constant probability function. Let be a simple random sample of a random variable with and . We have the following.   "
},
{
  "id": "sampling1_section-3-4",
  "level": "2",
  "url": "sampling1_section.html#sampling1_section-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "correction factor "
},
{
  "id": "simprandsamppropexer",
  "level": "2",
  "url": "sampling1_section.html#simprandsamppropexer",
  "type": "Checkpoint",
  "number": "6.6",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "sampling1_section-4-2",
  "level": "2",
  "url": "sampling1_section.html#sampling1_section-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial geometric exponential "
},
{
  "id": "binomialgeometricexponentialbasicsexer",
  "level": "2",
  "url": "sampling1_section.html#binomialgeometricexponentialbasicsexer",
  "type": "Checkpoint",
  "number": "6.7",
  "title": "",
  "body": "   Find the mean, and the variance for the binomial random variable .  Verify that the distribution function satisfies for .  Find the probability density function and find the mean and the variance for the exponential distribution.    "
},
{
  "id": "sampling1_section-4-4",
  "level": "2",
  "url": "sampling1_section.html#sampling1_section-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(standard) normal Gaussian "
},
{
  "id": "sampling1_section-4-5",
  "level": "2",
  "url": "sampling1_section.html#sampling1_section-4-5",
  "type": "Checkpoint",
  "number": "6.8",
  "title": "",
  "body": " Work through the examples in Section 1.4.2 and the exercises in Section 1.4.3 in Section 1.4 in .  "
},
{
  "id": "sampling2_section",
  "level": "1",
  "url": "sampling2_section.html",
  "type": "Section",
  "number": "7",
  "title": "Sampling II",
  "body": " Sampling II  The Central Limit Theorem  Recall that denotes the cumulative distribution function for the standard normal distribution.   The Central Limit Theorem  Let be a sequence of sample variables for a random variable with and . Let denote the variable , so that we have and . Let . We have for all .    Do the exercises in in Section 1.8.3 1.4 in .    Estimating population parameters  Let be a random variable with and . Let be the average of a sample of size of . For in the range , let be the value of a standard normal variable such that . The Central Limit Theorem says that Equation motivates the following procedure for estimating an unknown population parameter from sample data. Intuitively, estimates with an error estimated by . If the population variance is unknown, we can use the sample SD to estimate , and we can use to estimate . Inspired by , we say that the interval is a confidence interval for the population mean . Notice that the confidence interval is a random quantity, that is, it depends on the sample. Roughly speaking, we estimate that approximately of all confident intervals will contain , and approximately of these intervals will fail to contain .     Show that .  Explain why holds.      Hypothesis Testing  Hypothesis testing is using sample data to assign numbers for how skeptical you should be about certain claims. In this subsection we describe a hypothesis test called the 1-tail test . We will illustrate using the following example.  Suppose that you are assigned to check the accuracy of a machine that is supposed to make identical widgets with a weight of grams. Your sample of widgets has an average weight of grams, and your weighings have a sample SD of grams. There is a difference between your sample average and . How do you decide whether the difference is significant? In a hypothesis test, we play what-if? , in the following way. We suppose that the machine actually performs according to the claimed standards, so that the average widget has a weight of . Now we ask, what is the probability that a random sample of size would be as far away or farther from as the value that we observed? By the Central Limit Theorem, the answer is If this probability is small, we feel skeptical of the claim that the machine produced widgets with an average weight of . If this probability is large, we do not feel skeptical. The threshold probability value for skepticism is adjustable. The most common default value is . The formal structure of this type of hypothesis test, called a 1-tail test is this.  A null hypothesis, denoted , is made. This is a claim that a population average for a certain random variable has a certain value .  A sample of is taken.  A threshold probability is chosen.  The test statistic is calculated.  A conclusion is made: if , the data is called significant . The null hypothesis is rejected . If , the data is called not significant . The null hypothesis is not rejected .       Do the exercises in Section 1.8.3 of .    Read Section 5.2 in and work the odd numbered exercises at the end of the section.    "
},
{
  "id": "sampling2_section-2-3",
  "level": "2",
  "url": "sampling2_section.html#sampling2_section-2-3",
  "type": "Proposition",
  "number": "7.1",
  "title": "The Central Limit Theorem.",
  "body": " The Central Limit Theorem  Let be a sequence of sample variables for a random variable with and . Let denote the variable , so that we have and . Let . We have for all .  "
},
{
  "id": "basicsamplingexer",
  "level": "2",
  "url": "sampling2_section.html#basicsamplingexer",
  "type": "Checkpoint",
  "number": "7.2",
  "title": "",
  "body": " Do the exercises in in Section 1.8.3 1.4 in .  "
},
{
  "id": "sampling2_section-3-2",
  "level": "2",
  "url": "sampling2_section.html#sampling2_section-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "confidence interval "
},
{
  "id": "confintbasicexer",
  "level": "2",
  "url": "sampling2_section.html#confintbasicexer",
  "type": "Checkpoint",
  "number": "7.3",
  "title": "",
  "body": "   Show that .  Explain why holds.    "
},
{
  "id": "sampling2_section-4-3",
  "level": "2",
  "url": "sampling2_section.html#sampling2_section-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1-tail test "
},
{
  "id": "sampling2_section-5-1",
  "level": "2",
  "url": "sampling2_section.html#sampling2_section-5-1",
  "type": "Exercise",
  "number": "7.4.1",
  "title": "",
  "body": " Do the exercises in Section 1.8.3 of .  "
},
{
  "id": "sampling2_section-5-2",
  "level": "2",
  "url": "sampling2_section.html#sampling2_section-5-2",
  "type": "Exercise",
  "number": "7.4.2",
  "title": "",
  "body": " Read Section 5.2 in and work the odd numbered exercises at the end of the section.  "
},
{
  "id": "regression_section",
  "level": "1",
  "url": "regression_section.html",
  "type": "Section",
  "number": "8",
  "title": "Regression",
  "body": " Regression   The general goal of regression analysis is to find a nice function whose graph provides a good fit to a set of data points. In this section, we explain how regression works for 2-dimensional data, that is, points in the plane, and we give the details for the linear function that gives a best fit to the given data.   Measuring fit  Let be random variables on a probability space . Given a function , we define the variable by (the letter is for error function). The overall fit of to the data is measured by the standard deviation of the error variable . The idea is that if is low, then is a good fit, in the sense that the overall error incurred by using values to predict values of is minimized. The quantity is called the rms error for the function . The acronym rms is for root-mean-square , which comes from the formula for standard deviation, which is the square root of the mean of the square deviation.    Plot the graph of on the interval . Make up random variables on , with probability function given by for . Choose your variable so that its values are in the interval , and choose your variable so that the points lie near, but not exactly on, the graph . Calculate . Repeat this procedure for two or three more data sets of three points each in a way that illustrates how the size of relates to your visual sense of fit .     Linear regression  The regression line for on (also called the line of best fit , or the line of least squares error ), is the linear function that has the smallest value of , among all possible lines, for a given pair of random variables . It is not obvious, at first, that such a function should exist, or that is should be unique. But it turns out that there is precisely one such best fit line.  It is straightforward to use the linearity properties of expected value to solve for the values of that minimize the expression . First consider the case where are both standardized variables, that is, we have and . One quickly obtains the minimum possible value realized by the the optimizing values and . The regression line for standardized variables is the following. For the general case, the regression line is given by and the rms error for the regression line is , where is called the (Pearson) correlation coefficient . The regression line passes through the point , called the point of averages , and has slope equal to .   Show the derivations for and .   In practice, as is often the case with applications of sampling theory, we do not have full knowledge of the random variables , but we have a sample where for some sample from . In this case, we must estimate the quantities from the finite data set. To do this we use the sample average (see ) and the sample standard deviation (see ) to estimate and , respectively. Similarly, we use the sample mean and sample standard deviation for to estimate . To estimate , we use   Read Section 2.2 of for further vocabulary and facts about the regression line.     Work through all of the examples in Section 1.6.2 and all of the problems in problems 1.6.3 in Section 1.6 in .    "
},
{
  "id": "regression_section-3-2",
  "level": "2",
  "url": "regression_section.html#regression_section-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rms error "
},
{
  "id": "introregressionfitexer",
  "level": "2",
  "url": "regression_section.html#introregressionfitexer",
  "type": "Checkpoint",
  "number": "8.1",
  "title": "",
  "body": " Plot the graph of on the interval . Make up random variables on , with probability function given by for . Choose your variable so that its values are in the interval , and choose your variable so that the points lie near, but not exactly on, the graph . Calculate . Repeat this procedure for two or three more data sets of three points each in a way that illustrates how the size of relates to your visual sense of fit .  "
},
{
  "id": "regression_section-4-2",
  "level": "2",
  "url": "regression_section.html#regression_section-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "regression line for on "
},
{
  "id": "regression_section-4-3",
  "level": "2",
  "url": "regression_section.html#regression_section-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(Pearson) correlation coefficient point of averages "
},
{
  "id": "regrformulaexer",
  "level": "2",
  "url": "regression_section.html#regrformulaexer",
  "type": "Checkpoint",
  "number": "8.2",
  "title": "",
  "body": " Show the derivations for and .  "
},
{
  "id": "regression_section-5-1",
  "level": "2",
  "url": "regression_section.html#regression_section-5-1",
  "type": "Exercise",
  "number": "8.3.1",
  "title": "",
  "body": " Work through all of the examples in Section 1.6.2 and all of the problems in problems 1.6.3 in Section 1.6 in .  "
},
{
  "id": "projects_appdx",
  "level": "1",
  "url": "projects_appdx.html",
  "type": "Appendix",
  "number": "A",
  "title": "Projects",
  "body": " Projects   Use existing tools, or write your own code, or do a mix of both, to carry out one or more of the following projects. You may also propose a project idea that is not on this list.    Given a data set in an input file, draw the histogram for the distribuition function for the empirical random variable defined by the data.  Given a data set in an input file, draw the histogram for the empirical distribuition defined by the data.  Given a data set in an input file, calculate the mean and standard deviation for the empirical distribuition defined by the data.  Given a data set in an input file, generate a percentile table the empirical distribuition defined by the data.  Plot a sequence of normalized binomial histograms together with the normal distribution to illustrate convergence.  Plot a sequence of normalized binomial cdf's together with the normal cdf to illustrate convergence. Do an animated version if possible.  Generate 100 samples of some size, then plot the confidence intervals from the samples.    "
},
{
  "id": "backmatter-1",
  "level": "1",
  "url": "backmatter-1.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": "References  David Freedman, Robert Pisani, and Roger Purves. Statistics, 4th edition . Norton, 2007.  John A. Rice Mathematical Statistics and Data Analysis, 3rd edition . Thomson\/Brooks\/Cole, 2007.  David W. Lyons. Elementary Statistics Supplementary Notes . Mathvista.org   David W. Lyons. Not Just Calculus . Mathvista.org   Kenneth A. Ross and Charles R. B. Wright. Discrete Mathematics, 5th edition . Pearson, 2002.  George Casella and Roger L. Berger. Statistical Inference, 2nd edition . Hall\/CRC, 2024.  Frederick Mosteller. Fifty Challenging Problems in Probability . Courier Corporation, 1987. Online PDF   Diez, Çetinkaya-Rundel, Barr. OpenIntro Statistics, 4th edition . OpenIntro Statistics   "
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
