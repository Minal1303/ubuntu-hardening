import { Button, Typography, Box } from "@mui/material"
import { useGlobalContext } from '../../../context/global';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const ButtonComponent = ({ text, icon }) => {

    const { open, selected, handleSelect } = useGlobalContext();
    const [selected1, setSelected1] = useState(false);
    const router = useRouter();
    
    useEffect(() => {
        setSelected1(selected  === text ? true : false)
    }, [selected])

    return (
        <Button
            sx={{
                color: selected1 ? "#05D9D7" : text === selected ? "#05D9D7" : "#1D5352",
                display: "relative",
                justifyContent: !open ? "center " : "flex-start",
                alignItems: "center",
                py: 2,
                gap: "15px",
                borderRadius: "50px",
                width: "100%"
            }}
            onMouseEnter={() => setSelected1(true)}
            onMouseLeave={() => setSelected1(selected1 === text ? true : false)}
            onClick={() => {handleSelect(text); router.push(`/${text.toLowerCase()}`)}}
        >
            {(text === selected || selected1) && <Box
                sx={{
                    boxShadow: open
                        ? "0px 0px 70px 30px rgba(5,217,215,0.94)"
                        : "0px 0px 50px 12px rgba(5,217,215,0.94)",
                    width: "40px",
                    position: "absolute",
                    left: !open ? "20%" : "25%",
                    top: "40%",
                    zIndex: -1
                }}
            >

            </Box>}
            {icon}
            <Typography
                sx={{
                    display: open ? "flex" : "none",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "20px",
                }}
            >
                {text}
            </Typography>
        </Button>
    )
}