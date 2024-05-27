import { Box, Stack } from '@mui/material'
import React from 'react'
import { authCategories } from "../../utils/constans"
const AuthSideBar = ({ selectedCategory, setSelectedCategory }) => {
    return(
        <Stack direction="row"
        sx={{


            flexDirection: { md: "column" },
        }}>
        {authCategories.map((category) => (
            <button
                className="prime-btn"
                onClick={() => { setSelectedCategory(category.name) }}
                style={{
                    background: category.name === selectedCategory && "#e0fbfc",
                    borderColor: category.name === selectedCategory ? "#ee6c4d" : "#3d5a80",
                }}
                key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ? "#ee6c4d" : "#3d5a80", marginRight: "15px" }}>
                    {category.icon}
                </span>
                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                    {category.name}
                </span>
            </button>
        ))}

    </Stack>
    )
}

export default AuthSideBar