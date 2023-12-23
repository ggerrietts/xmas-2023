
import CandyCanes from "./canes.svg";
import {useLoaderData} from "react-router-dom";
import {useState} from "react";

const pages = {
    "package": {
        location: "Good job finding the clue! The next clue is taking a shower!",
        lastAnswer: "milk",
        riddle: "Your next password riddle: I am one of Santa's little helpers. What am I?"
    },
    "gift": {
        location: "Excellent! Your next clue is on the side of the washer!",
        lastAnswer: "elf",
        riddle: "Next riddle: I am a hook-shaped treat that hangs on the tree. What am I?",
    },
    "present": {
        location: "You've solved the third puzzle! You will find your next clue under the sink in the upstairs bathroom.",
        lastAnswer: "candy cane",
        riddle: "New hint: I hang on the branches of the tree, and I come in lots of shapes and sizes! What am I?",
    },
    "treat": {
        location: "Good work so far! Halfway there. You will find the next clue in the bottom drawer of the pantry.",
        lastAnswer: "ornament",
        riddle: "Next password riddle: I may not be an angel, but I twinkle from the top of the tree!",
    },
    "tree": {
        location: "Getting closer! The next clue is under the TV in mom's room.",
        lastAnswer: "star",
        riddle: "Your riddle: I pull Santa's sleigh, along with eight others like me! What am I?",
    },
    "feast": {
        location: "Almost there! The next clue is inside the dishwasher.",
        lastAnswer: "reindeer",
        riddle: "One more riddle: I am a Christmassy plant with red berries. I am also your aunt! Who am I?",
    },
    "candy": {
        location: "You did it! You've solved all the puzzles!",
        lastAnswer: "holly",
        riddle: "Your treasure is keeping warm with the clothes in the basement!",
    },
}


export function pageLoader({params}) {
    if (!(params.pagename in pages)) {
        throw new Error(`No such page ${params.pagename}!`)
    }
    const page = pages[params.pagename];
    return { page };
}

export default function MainComponent() {
    const {page} = useLoaderData();
    const [showPage, setShowPage] = useState(false);

    if (!showPage) {
        return <PasswordComponent lastAnswer={page.lastAnswer} setShowPage={setShowPage}/>;
    }
    return <DisplayComponent location={page.location} riddle={page.riddle}/>;
}

export function PasswordComponent({lastAnswer, setShowPage}) {
    const [password, setPassword] = useState('');
    const [guessed, setGuessed] = useState(false);

    const msg = guessed ? (<div className={"error"}>Invalid password.</div>) : "";
    function handleTextChange(e) {
        setPassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setGuessed(true);
        if (lastAnswer === password.toLowerCase().trim()) {
            setShowPage(true);
        } else {
            setPassword("");
        }
    }
    return (
    <div className={"nugget"}>
        <form onSubmit={handleSubmit}>
            { msg }
            <input
                placeholder={"Password"}
                type={"text"}
                value={password}
                onChange={handleTextChange}/><br/>
            <button>Submit</button>
        </form>
    </div>
    );
}

export function DisplayComponent({location, riddle}) {
    return (
        <div className="nugget">
            <div id={"top-div"}>{location}</div>
            <div id={"candy-wrapper"}><img id={"candy-canes"} alt="" src={CandyCanes}/></div>
            <div id={"bottom-div"}>{riddle}</div>
        </div>
    )
}