import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

require('typeface-lato')

export const GlobalTheme = createMuiTheme({

    palette: {
        primary: {
            main: "rgba(210, 210, 210, 1)",

        },

        secondary: {
            main: "rgba(240, 240, 240, 1)",
            mainGradient: "linear-gradient(180deg, rgba(210, 210, 210, 1) 40%, rgba(240, 240, 240, 1) 90%)",
        },

        default: {
            main: "rgba(171, 155, 154, 1)"
        }
    },

    typography: {
        fontFamily: [
            'Roboto'
        ]
    },

    overrides: {

        MuiPaper: {
            root: {
                backgroundColor: "rgba(245, 245, 245, 1)",
            }
        },

    },

});


const GlobalStylesAppend = (newStyle, theme) => ({


    ...newStyle(theme)
});


export const makeStylesGlobal = newStyle => makeStyles(theme => GlobalStylesAppend(newStyle, theme));
