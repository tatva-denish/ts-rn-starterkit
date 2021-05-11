import { ViewStyle, TextStyle, ImageStyle, } from "react-native"
import { color, spacing, typography } from "@theme"

export const FULL: ViewStyle = { flex: 1 }

export const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
    paddingTop: spacing[3],
}
export const TEXT: TextStyle = {
    color: color.palette.white,
    fontFamily: typography.primary,
}
export const BOLD: TextStyle = { fontWeight: "bold" }

export const HEADER: TextStyle = {
    paddingTop: spacing[3],
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0,
}
export const HEADER_TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    letterSpacing: 1.5,
}
export const TITLE_WRAPPER: TextStyle = {
    ...TEXT,
    textAlign: "center",
}
export const TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 28,
    lineHeight: 38,
    textAlign: "center",
}
export const ALMOST: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 26,
    fontStyle: "italic",
}
export const BOWSER: ImageStyle = {
    alignSelf: "center",
    marginVertical: spacing[5],
    maxWidth: "100%",
}
export const CONTINUE: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: "#821549",
}
export const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 13,
    letterSpacing: 2,
}
export const FOOTER: ViewStyle = { marginBottom: 0 }
export const FOOTER_CONTENT: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
}