import React from "react";
import cardstyle from "./card.module.scss";
import ButtonGreen from "../buttons/ButtonGreen";
import { Link } from "react-router-dom";
import { RiCalendar2Fill, RiGroupFill } from "react-icons/ri";

function Card() {
  return (
    <div className={cardstyle.card}>
      <div className={cardstyle.cardImageContainer}>
        <span className={cardstyle.cardImageChip}>Open</span>
        <img
          src={`https://s3-alpha-sig.figma.com/img/23b7/c6c2/1bd5d79ffd92520592b15c880189c9ac?Expires=1638748800&Signature=I8BTcFazz4QqS6RikWAQqqVt2JgWBbgMcHnrJ5loQkPqxaNaupwTr3DaXdD4SXhaZvFOWoGedqE2qIXzLX3K-QnSb2sBDJiE~9vckIMmf9sCcEPY7fyRwe0V6dr~jKW5Lp8dwtHy8B66FcxPfn1HoPwf7KPhhgfNfbJvQichhFiFjgR0vPLH5s1Y3jN3L-REgtRjp-y8s2VxJvUEcOaR2t3tin4-XKaSlG12CyB2SWkaEGeYQlciwf9uyXI5FD2uUJ32DFYtlmbJjraH69tbyRzeV5zs0NBHk0adlIF8nW6~ya522sk4--Z0YgVEk6TUwMTiU-qsPNhxnjPIT8KtRg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
          alt={`alt`}
          className={cardstyle.cardImage}
        />
      </div>
      <div className={cardstyle.cardText}>
        <p className={cardstyle.cardTextTitle}>Basic Math Decimal 1</p>
        <div className={cardstyle.cardTextInfo}>
          <RiCalendar2Fill className={cardstyle.cardIcon} />
          <p className={cardstyle.cardTextInfoTime}>
            4 October 2021 | 11:00 - 12:00
          </p>
        </div>
        <div className={cardstyle.cardTextInfo}>
          <RiGroupFill className={cardstyle.cardIcon} />
          <p className={cardstyle.cardTextInfoMembers}>15/50</p>
        </div>
        <Link to="#" className={cardstyle.cardLink}>
          <ButtonGreen name="ㅤ" />
        </Link>
      </div>
    </div>
  );
}

export default Card;
