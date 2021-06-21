import * as React from 'react'
import { View, Text } from 'react-native'
import { fetchApi } from '../../api/api'
import { EX_GET_POST } from '../../api/env'
import { CustomText } from '../../components'
import styles from './styles'

const ProfileScreen = () => {
    const [result, setResult] = React.useState('')

    React.useEffect(() => {
        testFetch()
    }, [])

    async function testFetch() {
        await fetchApi(EX_GET_POST(1), 'get', {})
            .then((res) => {
                if (res.data) {
                    setResult(res.data)
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <View style={styles.container}>
            <CustomText>
                {`Hallo test: ${JSON.stringify(result)}`}
            </CustomText>
        </View>
    )
}

export default ProfileScreen