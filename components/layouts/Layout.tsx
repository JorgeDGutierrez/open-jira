import { Box } from "@mui/system"
import Head from "next/head"
import { FC, PropsWithChildren, ReactNode } from "react"
import { Navbar, Sidebar } from "../ui";


interface Props {
    title?: string;
    children?: ReactNode;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ title = 'OpenJira', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }} >
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <Sidebar />

            <Box sx={{ padding: '10px 20px'}} >
                {children}
            </Box>

        </Box>
    )
}
