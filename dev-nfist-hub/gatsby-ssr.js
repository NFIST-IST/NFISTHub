const React = require('react');

exports.onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script
            key="bmc-button"
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="pcurvo"
            data-description="Support me on Buy me a coffee!"
            data-message="Help maintain my caffeine addiction"
            data-color="#5F7FFF"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
        ></script>,
    ]);
};
