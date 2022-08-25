import { Box, Text, Flex, SimpleGrid, Grid, GridItem, Button } from "@chakra-ui/react";
import HeaderCard from "../headerCard/HeaderCard.component";
import { useContext } from 'react'
import TimePeriodContext from "../../context/TimePeriodContext";

const CardList = () => { 
    const { period, data } = useContext(TimePeriodContext)


    return (
        <Grid 
            h={[null, null, null, '518px']}
            w={['375px', null, null, '1110px']}
            templateRows={[null, null, null, 'repeat(2, 1fr)']}
            templateColumns={[null, null, null, 'repeat(4, 1fr)']}
            mx='auto'
            my='auto'
            px='auto'
            gap='1.5rem'
            bgColor='hsl(226, 43%, 10%)'
         >
            <GridItem
                w={['327px', null, null, '255px']}
                rowSpan={[1, null, null, 2]}
                h={['203px', null, null, '518px' ]}
                background='blue.100'
                mx='auto'
                bgColor='hsl(226, 43%, 10%)'
            >
                <HeaderCard />
            </GridItem>
            {
                data.map( item => 
                    <GridItem 
                        key={item.id} 
                        bg={item.accentBgColor} 
                        borderRadius='xl' 
                        borderColor='tomato.200' 
                        m='auto' 
                        w={['327px', null, null, '255px']}
                        h={[null, null, null, '244px' ]}
                        // border='2px'  
                        
                    >
                        <Box 
                            bg={item.cardBgColor} 
                            mt='17%' 
                            h={['132.8px', null, null, '202.52px' ]}
                            // h='83%' 
                            borderRadius='lg' 
                        >

                            <Box
                                border='1px'
                                borderColor='blue.300'
                                w='80%'
                                mx='auto'
                                marginTop='1rem'
                            >
                            
                                <Flex 
                                    direction='column' 
                                    // w='80%' 
                                    mx='auto'  
                                    color='white' 
                                    // pt='0.5rem'
                                >
                                    <Flex 
                                        p='.5rem'  
                                        color='white' 
                                        m='auto' 
                                        justify='space-between' 
                                        w='100%'
                                    >
                                        <Box>
                                            <Text  fontSize='md'>{item.title}</Text>
                                        </Box>
                                        <Box >
                                            <Text fontSize='lg'>...</Text>
                                        </Box>
                                    </Flex>
                                        
                                    <Flex  
                                        color='white' 
                                        justify='space-between' 
                                        direction={['row', null, null, 'column']}
                                    >
                                        <Box>
                                            <Text fontSize={['3xl', null, null, '6xl']}>
                                                {period === 'monthly' && item.timeframes.monthly.current} 
                                                {period === 'weekly' && item.timeframes.weekly.current} 
                                                {period === 'daily' && item.timeframes.daily.current}hrs
                                            </Text>
                                        </Box>

                                        <Box >
                                            {period === 'daily' && <Text>Yesterday - {item.timeframes.daily.previous}hrs</Text>}
                                            {period === 'weekly' && <Text>Last week - {item.timeframes.weekly.previous}hrs</Text>}
                                            {period === 'monthly' && <Text>Last month - {item.timeframes.monthly.previous}hrs</Text>}
                                        </Box>
                                    </Flex>  
                                </Flex>
                            </Box>

                        </Box>

                    </GridItem>
                )
            }
               
        </Grid>
    )
};

export default CardList;