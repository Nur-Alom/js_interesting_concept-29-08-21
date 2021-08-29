/*
Falsy:
false
0
empty string
undefined
null
NaN

---------------------------------

Truthy:
true
any number (positive and negative. not 0).
any string including spacing " ".
[].
{}.
anything else that is not falsy will be truthy.

*/

const x = false;

if (x) {
    console.log('true');
}
else {
    console.log('false');
}

