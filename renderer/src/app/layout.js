"use client";
import { DrawerLeft } from "../components/Global/Drawer"
import { GlobalContextProvider } from "../context/global"
import { ipcRenderer } from "electron";
import "./globals.css"
import { Alert, Snackbar } from "@mui/material";
import { useState, useEffect } from "react";
import { Loader } from "../components/Global/Loader";

export default function RootLayout({ children }) {

  const [mainRes, setMainRes] = useState({ open: false, res: "" })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [])

  useEffect(() => {
    const handleExecuteScriptResponse = (event, args) => {
      console.log(args);
      setMainRes({ open: true, res: args });
    };

    ipcRenderer.on("execute-script-response", handleExecuteScriptResponse);

    return () => {
      ipcRenderer.removeListener("execute-script-response", handleExecuteScriptResponse);
    };
  }, []);

  return (
    <html lang="en">
      <body
        style={{
          position: "relative"
        }}
      >
        {loading ?
          <>
            <Loader />
          </>
          :
          <GlobalContextProvider>
            <DrawerLeft>

              {children}
            </DrawerLeft>
          </GlobalContextProvider>
        }
        <Snackbar open={mainRes.open} autoHideDuration={6000} onClose={() => setMainRes({ open: false, res: "" })}>
          <Alert onClose={() => setMainRes({ open: false, res: "" })} severity="success" sx={{ width: '100%' }}>
            {mainRes.res}
          </Alert>
        </Snackbar>
      </body>
    </html>
  )
}