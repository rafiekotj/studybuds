import React from "react";
import cardstyle from "./card.module.scss";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
import { RiCalendar2Fill, RiGroupFill } from "react-icons/ri";

function Card() {
  return (
    <div className={cardstyle.card}>
      <div className={cardstyle.cardImageContainer}>
        <span className={cardstyle.cardImageChip}>Open</span>
        <img
          src={`https://s3-alpha-sig.figma.com/img/1e06/85b9/639c3e6dd91aa6fbaa3fa83553182dd8?Expires=1639958400&Signature=WMzY6Gf2n28YT9JqM-MHXkKdiOB~Cw7Yll0R9xnZBVzOLl3bigx7repAjgDzkmUKn0nNDwSoxhZs6X92WLUrr9AOOWLWaGcuJ0kV0M~YBevASoeTJ9SEWqMXVF~tsbose8O8uSlJxgLr2TR7X8ayiGihLMYHYtyMWNKpKGJfRbUyjc~7Zd3k2BZD6MefCGYz1aipkDcZzHAWh~4UiC3o~1Z43UbIGkgb7wgSIAsnDYWRJafGtIPIo-~VurNTv9MCJaKh-lAlTU8r7kJXgHpyE68N-1MjkRAW-C8APuQGzxo5JP0cyllaZzbKz~cqeNJg4nVr3lyL5WSQyvZsVSvmuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
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
        <Link to="/room" className={cardstyle.cardLink}>
          <Button classStyle="buttonGreen">Join Room</Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
