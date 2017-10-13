import React from "react";
import md5 from "md5";
import { format, formatDistanceStrict } from "date-fns";
import PropTypes from "prop-types";
import FuseActions from "./FuseActions";

import "./Fuse.css";

const Fuse = ({ id, date, userName, fullName, avatar, email, message, favorite, onFavorite }) => {
  const url = avatar || `https://www.gravatar.com/avatar/${md5(email)}`;

  return (
    <div className="Fuse">
      <img className="Fuse-avatar" alt={`${fullName}'s Avatar`} src={url} />
      <article className="Fuse-body">
        <header className="Fuse-header">
          <div className="Fuse-fullName">{fullName}</div>
          <span>&nbsp;</span>
          <div className="Fuse-userName">@{userName}</div>
          <span>&nbsp;—&nbsp;</span>
          <div className="Fuse-date" title={format(date, "LLL")}>
            {formatDistanceStrict(date, new Date())}
          </div>
        </header>
        <div className="Fuse-message">{message}</div>
        <FuseActions id={id} userName={userName} favorite={favorite} onFavorite={onFavorite} />
      </article>
    </div>
  );
};

Fuse.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  userName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired
};

React.defaultProps = {
  onFavorite: () => {}
};

export default Fuse;