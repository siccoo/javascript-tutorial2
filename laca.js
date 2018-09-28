var interns  = [
    {fname: 'Chilaka', lname: 'Micheal', devloper: 'frontEnd', coreLanguage: 'React', age: 24, frameWork: 'LakaJs'},
    {fname: 'Andrew', lname: 'Miracle', devloper: 'UI Specialist/Backend', coreLanguage: 'Laravel Stack', age: 25, frameWork: 'RushJs'},
    {fname: 'Zoe', lname: 'Smart', devloper: 'frontEnd', coreLanguage: 'React', age: 24, frameWork: 'ZoeJs'},
    {fname: 'Bernadine', lname: 'May', devloper: 'frontEnd', coreLanguage: 'React', age: 24, frameWork: 'MayUI'},
    {fname: 'Shalom', lname: 'Matthew', devloper: 'frontEnd', coreLanguage: 'React', age: 24, frameWork: 'ShallyJS'},
    {fname: 'Grace', lname: 'Onoja', devloper: 'frontEnd', coreLanguage: 'Bootstrap', age: 24, frameWork: 'GrayUI'},
    {fname: 'Mac', lname: 'Anthony', devloper: 'Backend', coreLanguage: 'NodeJS', age: 24, frameWork: 'NiggieJs'},
    {fname: 'Ezekiel', lname: 'Blanc', devloper: 'Backend', coreLanguage: 'React', age: 24, frameWork: 'EaziJs'},
    {fname: 'Ibekwe', lname: 'Prince', devloper: 'SEO', coreLanguage: 'Javascript', age: 24, frameWork: 'Pricee'},
    {fname: 'Chidera', lname: 'Dexious', devloper: 'Backend', coreLanguage: 'Javascript', age: 24, frameWork: 'DeraJS'},
    {fname: 'Prince', lname: 'Emmanuel', devloper: 'Fullstack', coreLanguage: 'Vue', age: 24, frameWork: 'VueForm'},
    {fname: 'Rutherford', lname: 'Ve', devloper: 'Wordpress', coreLanguage: 'Drupal', age: 24, frameWork: 'Woot'},
    {fname: 'George', lname: 'Fayvor', devloper: 'Fullstack', coreLanguage: 'Javascript', age: 24, frameWork: 'XtemJS'},
];

const frontEnd = interns.filter((intern) => {
    return (intern.developer === 'frontEnd') ? 1 : -1;
})

console.table(frontEnd);