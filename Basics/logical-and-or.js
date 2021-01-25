let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan)
{
    console.log("salads");
}
else if (isGuestOneVegan || isGuestTwoVegan)
{
    console.log("salad and hamburger");
}
else
{
    console.log("hamburgers");
}