package org.cvnxsolution.medmybackend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.cvnxsolution.medmybackend.utils.CurrencyType;
import org.cvnxsolution.medmybackend.utils.WalletStatus;

import java.math.BigDecimal;

@Entity
@Table(name = "wallets")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Wallet {
    @Id
    private Long id;
    private BigDecimal balance;
    
    private BigDecimal pendingBalance;

    private String payoutPhoneNumber;

    private WalletStatus status;

    private CurrencyType currency;

    @OneToOne
    @JoinColumn(name = "trainer_id")
    private Trainer trainer;
}
