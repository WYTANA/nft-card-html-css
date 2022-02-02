
let dog = {
    name: "Shibe #5079",
    price: "0.09ETH",
    description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
    nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600",
    // nft: "./images/newImage.png",
    backGroundColor: "#00FFFF",
    cardColor: "#FFC579",
    otherData: {
        owner: "Lance Toledo",
        daysLeft: "1 day left",
        profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c",
    }
}

let button = document.querySelector("button")

const changeName = () => {
    // console.log("Hello")
    let nftName = document.getElementsByTagName("h3")[0]
    if (nftName.innerText === "Here's Your Flower! #24") {
        nftName.innerText = dog.name
    } else {
        nftName.innerText = "Here's Your Flower! #24"
    }
    return nftName
}

const changePrice = () => {
    let nftPrice = document.getElementsByClassName("nft-price")[0]
    if (nftPrice.innerText === "0.125 ETH") {
        nftPrice.innerText = dog.price
    } else {
        nftPrice.innerText = "0.125 ETH"
    }
    return nftPrice
}

const changeDays = () => {

    let nftDays = document.getElementsByClassName("nft-days")[0]
    if (nftDays.innerText === "3 days left!") {
        nftDays.innerText = dog.otherData.daysLeft
    }
    else {
        nftDays.innerText = "3 days left!"
    }
    return nftDays
}

const changeArtistText = () => {
    let nftArtist = document.getElementsByClassName("nft-artist")[0]
    if (nftArtist.innerText === "Travis L Orback") {
        nftArtist.innerText = dog.otherData.owner
    } else {
        nftArtist.innerText = "Travis L Orback"
    }
    return nftArtist
}


const changeOwnerImg = () => {
    let ownerImage = document.querySelectorAll("img")[3]
    if (ownerImage.src === "http://127.0.0.1:5501/images/Travis_Lisa_Palmdale_06_2018_1%20-%20Copy.jpeg") {
        ownerImage.src = dog.otherData.profileImg
    } else {
        ownerImage.src = "http://127.0.0.1:5501/images/Travis_Lisa_Palmdale_06_2018_1%20-%20Copy.jpeg"
    }
    return ownerImage
}


const changeDesc = () => {
    let nftDesc = document.getElementsByClassName("nft-desc")[0]
    if (nftDesc.innerText === "The Stone Giant brings a peace offering - don't blow it!") {
        nftDesc.innerText = dog.description
    } else {
        nftDesc.innerText = "The Stone Giant brings a peace offering - don't blow it!"
    }
    return nftDesc
}

const changeNftImg = () => {
    let newNftImage = document.getElementById("nft")
    if (newNftImage.src === "http://127.0.0.1:5501/images/giant.sketchpad.svg") {
        newNftImage.src = dog.nft
    } else {
        newNftImage.src = "http://127.0.0.1:5501/images/giant.sketchpad.svg"
    }
    return newNftImage
}

const changeBodyColor = () => {
    let bGColor = document.getElementById("body").style
    console.log(bGColor)
    // bGColor = "#0d192b"
    if (bGColor.background === "#0d192b") {
        bGColor.background = dog.backGroundColor
    } else {
        bGColor.background = "#0d192b"
    }
    return bGColor
}

const changeCardColor = () => {
    let originalColor = document.getElementsByClassName("container")[0].style
    // originalColor.backgroundColor = "rgb(255, 197, 121)"
    if (originalColor.backgroundColor === "#96570B") {
        originalColor.backgroundColor = dog.cardColor
    } else {
        originalColor.backgroundColor = "#96570B"
    }
    return originalColor
}

button.addEventListener("click", changeDays)
button.addEventListener("click", changePrice)
button.addEventListener("click", changeName)
button.addEventListener("click", changeArtistText)
button.addEventListener("click", changeDesc)
button.addEventListener("click", changeNftImg)
button.addEventListener("click", changeOwnerImg)
button.addEventListener("click", changeBodyColor)
button.addEventListener("click", changeCardColor)




