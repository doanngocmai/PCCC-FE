import styles from '../styles/WhiteBox.module.css'

type Props = {
  children: any
}

export default function WhiteBox({ children }: Props) {
  return <div className={styles.container_box}>{children}</div>
}
