import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-items/menu-item.component";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";

const Directory = ({ directory: { sections } }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
