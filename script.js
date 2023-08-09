let body = document.querySelector("body");
const user_board = document.querySelector(".user");
const computer_board = document.querySelector(".computer");

const message_box = document.querySelector(".message")

let user_score = 0;
let computer_score = 0;


// const Rock = document.querySelector("#Rock")
// const Paper = document.querySelector("#Paper")
// const Scissors = document.querySelector("#Scissors")


const choices = ["Rock", "Paper", "Scissors"]

const generateComputerResponse = () => {
    const index = ((Math.random() * 10).toFixed(0)) % 3
    return choices[index]
}





const result = (winner, userResponse, computerResponse) => {
    switch (winner) {
        case "user":
            // display message 
            message_box.innerHTML = `User Wins !! 😍😍<br/> Computer responce - ${computerResponse} `
            document.querySelector(`#${userResponse}`).classList.add('won')
            user_board.innerHTML = ++user_score
            break


        case "computer":
            message_box.innerHTML = `Computer Wins !! 😢😢<br/> Computer responce - ${computerResponse} `   //beats ${userResponse}
            computer_board.innerHTML = ++computer_score
            break


        case "Tie":
            message_box.innerHTML = `Tie !! 😁😁<br/>  Computer responce - ${computerResponse} `
            break


        default:
            window.alert("something went wrong")



    }
}






const playGame = (userResponse) => {
    const computerResponse = generateComputerResponse()
    if (userResponse === computerResponse) console.log('Tie!!')


    switch (userResponse) {
        case "Rock":
            switch (computerResponse) {
                case "Paper":
                    return result("computer", userResponse, computerResponse)
                case "Scissors":
                    return result("user", userResponse, computerResponse)
                case "Rock":
                    return result("Tie", userResponse, computerResponse)
            }
        case "Paper":
            switch (computerResponse) {
                case "Rock":
                    return result("user", userResponse, computerResponse)
                case "Scissors":
                    return result("computer", userResponse, computerResponse)
                case "Paper":
                    return result("Tie", userResponse, computerResponse)


            }
        case "Scissors":
            switch (computerResponse) {
                case "Rock":
                    return result("computer", userResponse, computerResponse)
                case "Paper":
                    return result("user", userResponse, computerResponse)
                case "Scissors":
                    return result("Tie", userResponse, computerResponse)
            }

    }

}


Rock.addEventListener('click', (e) => playGame(e.target.id))
Paper.addEventListener('click', (e) => playGame(e.target.id))
Scissors.addEventListener('click', (e) => playGame(e.target.id))