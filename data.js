const ROLE={
    ADMIN:'admin',
    BASIC:'basic'

}

module.exports={
    ROLE:ROLE,
    users: [
        {id:1, name:'Hodal', role:ROLE.ADMIN},
        {id:2, name:'Prince', role:ROLE.BASIC}
    ],
    projects: [
        { id: 1, name: "Hodal's Project", userId: 1 },
        { id: 2, name: "Sally's Project", userId: 2 }
      ]
}