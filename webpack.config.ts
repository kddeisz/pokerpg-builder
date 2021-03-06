import path from "path";

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "docs"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css", ".csv"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      },
      { test: /\.csv$/, use: "dsv-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "docs")
  }
};
