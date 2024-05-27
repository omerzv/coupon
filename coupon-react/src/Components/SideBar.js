import { Stack } from '@mui/material';
import { categories } from '../utils/constans';



const SideBar = ({selectedCategory,setSelectedCategory}) => (
    <Stack direction="row"
        sx={{
           
           
            flexDirection: { md: "column" },
        }}>
        {categories.map((category) => (
            <button
                className="prime-btn"
                onClick={() => {setSelectedCategory(category.name)}}
                style={{
                    background: category.name === selectedCategory && "#e0fbfc",
                    borderColor: category.name === selectedCategory ? "#ee6c4d" : "#3d5a80",
                }}
                key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ?"#ee6c4d" : "#3d5a80", marginRight: "15px" }}>
                    {category.icon}
                </span>
                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                    {category.name}
                </span>
            </button>
        ))}

    </Stack>
)

export default SideBar