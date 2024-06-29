"use client";
import React, { useRef, useState, useEffect } from "react";
import { FlashcardArray } from "react-quizlet-flashcard";

const cards = [
  {
    id: 1,
    frontHTML: (
      <div>
        What is the capital of <u>Alaska</u>?
      </div>
    ),
    backHTML: <>Juneau</>,
  },
  {
    id: 2,
    frontHTML: <>What is the capital of California?</>,
    backHTML: <>Sacramento</>,
  },
  {
    id: 3,
    frontHTML: <>What is the capital of New York?</>,
    backHTML: <>Albany</>,
  },
  {
    id: 4,
    frontHTML: <>What is the capital of Florida?</>,
    backHTML: <>Tallahassee</>,
  },
  {
    id: 5,
    frontHTML: <>What is the capital of Texas?</>,
    backHTML: <>Austin</>,
  },
  {
    id: 6,
    frontHTML: <>What is the capital of New Mexico?</>,
    backHTML: <>Santa Fe</>,
  },
  {
    id: 7,
    frontHTML: <>What is the capital of Arizona?</>,
    backHTML: <>Phoenix</>,
  },
];

const MyFlashcard = () => {
  const flashcardControlRef = useRef({});
  const [currentCard, setCurrentCard] = useState(1);
  const [cardsLength, setCardLength] = useState(cards.length);
  const [isEnded, setIsEnded] = useState(false);
  const currentCardFlipRef = useRef();
  const [isFlip, setIsFlip] = useState(true);

  const appendCardToBack = () => {
    cards.push({
      id: 7,
      frontHTML: <>What is the capital of Arizona?</>,
      backHTML: <>Phoenix</>,
    });

    setCardLength(cards.length);
  };

  const retry = () => {
    flashcardControlRef.current.nextCard();
    if (cardsLength - currentCard > 3) appendCardToBack();
  };

  const next = () => {
    flashcardControlRef.current.nextCard();
  };

  const flip = () => {
    setIsFlip(false);
    currentCardFlipRef.current();
  };

  const end = () => {
    setIsEnded(true);
  };

  useEffect(() => {
    setIsFlip(false);
    if (currentCard == cards.length) {
      end();
    }
  }, [currentCard]);

  if (isEnded) {
    return <div className=" max-w-screen-sm flex flex-col">yehh</div>;
  }
  return (
    <div className=" max-w-screen-sm flex flex-col">
      <FlashcardArray
        cards={cards}
        onCardChange={(id, index) => {
          setCurrentCard(index);
        }}
        controls={false}
        showCount={false}
        forwardRef={flashcardControlRef}
        currentCardFlipRef={currentCardFlipRef}
      />

      <p>
        {currentCard} / {cardsLength}
      </p>
      <div className="flex justify-between">
        {isFlip ? (
          <button onClick={flip} className="button-outline w-full">
            flip
          </button>
        ) : (
          <VerifyButtonGroup retry={retry} next={next} />
        )}
      </div>
    </div>
  );
};

const VerifyButtonGroup = ({ retry, next }) => {
  return (
    <div className="flex w-full gap-4 items-stretch justify-center">
      <button onClick={retry} className="button-outline w-full bg-red-400/30">
        No
      </button>

      <button onClick={next} className="button-outline w-full !bg-green-400/30">
        Yes
      </button>
    </div>
  );
};
export default MyFlashcard;
