import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUserProfile } from "./usersAsyncThunks";

import { selectUserById } from "./usersSlice";

const svgChevron = (
  <svg viewBox="0 0 21.32 10.91">
    <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
  </svg>
);

const Dropdown = ({ setContainerState }) => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const [display, setDisplay] = useState(currentUser.myColor);
  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(true);
  };

  const closeDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(false);
    document.removeEventListener("click", closeDropdown);
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("click", closeDropdown);
    }
  }, [showDropdown]);

  const handleYellow = (e) => {
    e.preventDefault();
    setDisplay("Yellow");
    setContainerState("#fff100");
    closeDropdown(e);
  };
  const handleOrange = (e) => {
    e.preventDefault();
    setDisplay("Orange");
    setContainerState("#ff8c00");
    closeDropdown(e);
  };
  const handleRed = (e) => {
    e.preventDefault();
    setDisplay("Red");
    setContainerState("#e81123");
    closeDropdown(e);
  };
  const handleMagenta = (e) => {
    e.preventDefault();
    setDisplay("Magenta");
    setContainerState("#ec008c");
    closeDropdown(e);
  };
  const handlePurple = (e) => {
    e.preventDefault();
    setDisplay("Purple");
    setContainerState("#68217a");
    closeDropdown(e);
  };
  const handleBlue = (e) => {
    e.preventDefault();
    setDisplay("Blue");
    setContainerState("#00188f");
    closeDropdown(e);
  };
  const handleCyan = (e) => {
    e.preventDefault();
    setDisplay("Cyan");
    setContainerState("#00bcf2");
    closeDropdown(e);
  };
  const handleTeal = (e) => {
    e.preventDefault();
    setDisplay("Teal");
    setContainerState("#00b294");
    closeDropdown(e);
  };
  const handleGreen = (e) => {
    e.preventDefault();
    setDisplay("Green");
    setContainerState("#009e49");
    closeDropdown(e);
  };
  const handleLime = (e) => {
    e.preventDefault();
    setDisplay("Lime");
    setContainerState("#bad80a");
    closeDropdown(e);
  };

  //

  const arrowStyle = showDropdown
    ? "SquareSelectTitle__Arrow arrow_up"
    : "SquareSelectTitle__Arrow arrow_down";

  const dropdownContainerStyle = showDropdown
    ? "SquareManySelects__Container isOpen"
    : "SquareManySelects__Container isClosed";

  const dropdownExpandedContent = showDropdown ? (
    <div className="DropdownExpansionContainer">
      <div className="DropdownOptionsContainer">
        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleYellow}>
              {"Yellow"}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleOrange}>
              {"Orange"}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleRed}>
              {"Red"}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleMagenta}>
              {"Magenta"}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handlePurple}>
              {"Purple"}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleBlue}>
              {"Blue"}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleCyan}>
              {"Cyan"}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleTeal}>
              {"Teal"}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleGreen}>
              {"Green"}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleLime}>
              {"Lime"}
              {/* {icon} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="DropdownExpansionContainer">
      <div className="DropdownOptionsContainer"></div>
    </div>
  );

  return (
    <div className="Dropdown">
      <div className="SquareManySelects__Wrapper" onClick={openDropdown}>
        <div className={dropdownContainerStyle}>
          <div className="SquareSelectTitle__Container">
            {display}
            <div className={arrowStyle}>{svgChevron}</div>
          </div>
        </div>
      </div>
      {dropdownExpandedContent}
    </div>
  );
};

const ProfileEdit = ({ match }) => {
  const { userId } = match.params;
  const user = useSelector((state) => selectUserById(state, userId));
  const currentUser = useSelector((state) => state.session.currentUser);

  const dispatch = useDispatch();
  const handleUpdateColor = (e) => {
    e.preventDefault();
    dispatch(
      updateUserProfile({
        id: currentUser.id,
        my_color: selectedColor,
      })
    );
  };

  const [selectedColor, setSelectedColor] = useState(currentUser.myColor);

  const showSelectedColor = (
    <div style={{ backgroundColor: `${selectedColor}` }}>
      <br />
      <p>myColor: {selectedColor}</p>
      <br />
    </div>
  );

  let profile;
  if (user) {
    const authoredComments = user.authoredCommentsCount || "0";
    profile = (
      <section>
        <h1>Your Profile Page</h1>
        <p>id: {user.id}</p>
        <p>username: {user.username}</p>
        <p>email: {currentUser.email}</p>
        <p>authored_comments_count: {authoredComments}</p>
        {showSelectedColor}
        <Dropdown setContainerState={setSelectedColor} />
        <button onClick={handleUpdateColor}>Save Changes</button>
      </section>
    );
  } else {
    profile = (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  return profile;
};

export default ProfileEdit;
