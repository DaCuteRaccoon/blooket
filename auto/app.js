async function getName(authToken) {
    const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + authToken);
    const data = await response.json();

    return data.name
};

async function addTokens() {
    const add_tokens = 500;
    const myToken = localStorage.token.split('JWT ')[1];

    const response = await fetch('https://api.blooket.com/api/users/add-rewards', {
        method: "PUT",
        headers: {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
        body: JSON.stringify({
            name: await getName(myToken),
            addedTokens: add_tokens,
            addedXp: 300
        })
    });

    if (response.status == 200) {
        console.log(`${add_tokens} added to your account!`);
    } else {
        alert('An error occured.');
    };

};

addTokens();
