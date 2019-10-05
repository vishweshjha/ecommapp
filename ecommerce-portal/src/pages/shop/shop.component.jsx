import React, { Component } from "react";
import PropTypes from "prop-types";
import SHOP_DATA from "../../data/data.js";
import CollectionPreview from "../../components/preview-collection/collection.preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections &&
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    );
  }
}

ShopPage.propTypes = {};

export default ShopPage;
