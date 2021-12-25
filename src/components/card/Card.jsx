import React from "react";
import cardstyle from "./card.module.scss";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
import { RiCalendar2Fill, RiGroupFill } from "react-icons/ri";

function Card({ data }) {
  return (
    <div className={cardstyle.card}>
      <div className={cardstyle.cardImageContainer}>
        <span
          className={`${cardstyle.cardImageChip} ${
            data.roomStatus === "Open"
              ? cardstyle.cardImageChipOpen
              : cardstyle.cardImageChipRestricted
          }`}
        >
          {data.roomStatus}
        </span>
        <img
          src={data.imageClass}
          alt={data.title}
          className={cardstyle.cardImage}
        />
      </div>
      <div className={cardstyle.cardText}>
        <Link to={`/room/${data.id}`} className={cardstyle.cardLink}>
          <p className={cardstyle.cardTextTitle}>{data.title}</p>
        </Link>
        <div className={cardstyle.cardTextInfo}>
          <RiCalendar2Fill className={cardstyle.cardIcon} />
          <p className={cardstyle.cardTextInfoTime}>
            {data.date} | {data.startTime} - {data.endTime}
          </p>
        </div>
        <div className={cardstyle.cardTextInfo}>
          <RiGroupFill className={cardstyle.cardIcon} />
          <p className={cardstyle.cardTextInfoMembers}>
            {data.countJoined}/{data.limitParticipant}
          </p>
        </div>
        <Link
          to={`/room/${data.id}/meeting/${data.roomName}`}
          className={cardstyle.cardLink}
        >
          <Button classStyle="buttonGreen">Join Room</Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
